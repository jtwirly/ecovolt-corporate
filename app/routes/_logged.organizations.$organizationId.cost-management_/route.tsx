import React, { useState } from 'react'
import {
  Typography,
  Card,
  Row,
  Col,
  Select,
  DatePicker,
  Table,
  Alert,
  Button,
  InputNumber,
  Form,
} from 'antd'
const { Title, Text } = Typography
const { RangePicker } = DatePicker
import { RangePickerProps } from 'antd/es/date-picker'
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function CostManagementPage() {
  const { organizationId } = useParams()
  const [dateRange, setDateRange] = useState<RangePickerProps['value']>([
    dayjs().subtract(1, 'month'),
    dayjs(),
  ])
  const [selectedFacility, setSelectedFacility] = useState<string | null>(null)
  const [alertThreshold, setAlertThreshold] = useState<number | null>(null)

  const { data: facilities } = Api.facility.findMany.useQuery({
    where: { organizationId },
  })

  const { data: energyCosts } = Api.energyCost.findMany.useQuery({
    where: {
      facilityId: selectedFacility || undefined,
      date: {
        gte: dateRange?.[0]?.format('YYYY-MM-DD'),
        lte: dateRange?.[1]?.format('YYYY-MM-DD'),
      },
    },
    include: { facility: true },
  })

  const { mutateAsync: createAlert } = Api.alert.create.useMutation()

  const handleDateRangeChange = (dates: RangePickerProps['value']) => {
    setDateRange(dates)
  }

  const handleFacilityChange = (value: string) => {
    setSelectedFacility(value)
  }

  const handleSetAlert = async () => {
    if (alertThreshold && selectedFacility) {
      await createAlert({
        data: {
          type: 'COST_THRESHOLD',
          message: `Energy cost threshold of ${alertThreshold} has been set for the selected facility.`,
          userId: 'placeholder-user-id', // Replace with actual user ID
          facilityId: selectedFacility,
        },
      })
      alert('Cost alert has been set successfully!')
    }
  }

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (date: string) => dayjs(date).format('YYYY-MM-DD'),
    },
    {
      title: 'Facility',
      dataIndex: ['facility', 'name'],
      key: 'facility',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount: number) =>
        `${amount.toFixed(2)} ${energyCosts?.[0]?.currency || ''}`,
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>
          <i className="las la-chart-line" style={{ marginRight: '8px' }}></i>
          Cost Management
        </Title>
        <Text>
          Analyze energy costs and set alerts for efficient cost management.
        </Text>

        <Card style={{ marginTop: '24px' }}>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Select
                style={{ width: '100%' }}
                placeholder="Select Facility"
                onChange={handleFacilityChange}
              >
                {facilities?.map(facility => (
                  <Select.Option key={facility.id} value={facility.id}>
                    {facility.name}
                  </Select.Option>
                ))}
              </Select>
            </Col>
            <Col xs={24} sm={12}>
              <RangePicker
                style={{ width: '100%' }}
                value={dateRange}
                onChange={handleDateRangeChange}
              />
            </Col>
          </Row>
        </Card>

        <Card title="Energy Cost Breakdown" style={{ marginTop: '24px' }}>
          <Table
            dataSource={energyCosts}
            columns={columns}
            rowKey="id"
            pagination={{ pageSize: 10 }}
          />
        </Card>

        <Card title="Set Cost Alert" style={{ marginTop: '24px' }}>
          <Form layout="inline">
            <Form.Item label="Threshold">
              <InputNumber
                style={{ width: '200px' }}
                placeholder="Enter threshold amount"
                value={alertThreshold}
                onChange={value => setAlertThreshold(value)}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                onClick={handleSetAlert}
                disabled={!alertThreshold || !selectedFacility}
              >
                Set Alert
              </Button>
            </Form.Item>
          </Form>
          <Alert
            style={{ marginTop: '16px' }}
            message="Set a cost alert to receive notifications when energy spending exceeds the predefined threshold."
            type="info"
            showIcon
          />
        </Card>
      </div>
    </PageLayout>
  )
}

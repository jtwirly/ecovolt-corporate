import React, { useState } from 'react'
import { Typography, Card, Space, Select, DatePicker, Row, Col } from 'antd'
import { Line } from '@ant-design/plots';
const { Title, Text } = Typography
const { RangePicker } = DatePicker
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function EnergyConsumptionAnalysisPage() {
  const { organization } = useUserContext()
  const { organizationId } = useParams()
  const [selectedFacility, setSelectedFacility] = useState<string | null>(null)
  const [dateRange, setDateRange] = useState<[dayjs.Dayjs, dayjs.Dayjs] | null>(
    null,
  )

  const { data: facilities } = Api.facility.findMany.useQuery({
    where: { organizationId },
  })

  const { data: energyConsumptions } = Api.energyConsumption.findMany.useQuery({
    where: {
      facilityId: selectedFacility || undefined,
      date: dateRange
        ? {
            gte: dateRange[0].format('YYYY-MM-DD'),
            lte: dateRange[1].format('YYYY-MM-DD'),
          }
        : undefined,
    },
    include: { facility: true },
  })

  const chartData = energyConsumptions?.map(consumption => ({
    date: consumption.date,
    amount: consumption.amount,
    facility: consumption.facility.name,
  }))

  return (
    <PageLayout layout="full-width">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={2}>
            <i className="las la-chart-line"></i> Energy Consumption Analysis
          </Title>
          <Text>
            Analyze detailed charts and graphs of energy consumption patterns
            over time to identify trends and anomalies.
          </Text>
        </Card>

        <Card>
          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <Select
                  style={{ width: '100%' }}
                  placeholder="Select a facility"
                  onChange={value => setSelectedFacility(value)}
                  allowClear
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
                  onChange={dates =>
                    setDateRange(dates as [dayjs.Dayjs, dayjs.Dayjs])
                  }
                />
              </Col>
            </Row>

            {chartData && chartData.length > 0 ? (
              <Line
                data={chartData}
                xField="date"
                yField="amount"
                seriesField="facility"
                xAxis={{
                  type: 'time',
                  tickCount: 5,
                }}
                yAxis={{
                  label: {
                    formatter: v => `${v} kWh`,
                  },
                }}
                tooltip={{
                  formatter: datum => {
                    return {
                      name: datum.facility,
                      value: `${datum.amount} kWh`,
                    }
                  },
                }}
              />
            ) : (
              <Text>No data available for the selected criteria.</Text>
            )}
          </Space>
        </Card>
      </Space>
    </PageLayout>
  )
}

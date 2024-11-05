import React, { useState } from 'react'
import { Typography, Table, Card, Row, Col, Select, Spin } from 'antd'
const { Title, Text } = Typography
const { Option } = Select
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function FacilityManagementPage() {
  const { organizationId } = useParams()
  const [selectedFacility, setSelectedFacility] = useState<string | null>(null)

  const { data: facilities, isLoading: facilitiesLoading } =
    Api.facility.findMany.useQuery({
      where: { organizationId },
    })

  const { data: energyConsumption, isLoading: consumptionLoading } =
    Api.energyConsumption.findMany.useQuery(
      {
        where: { facilityId: selectedFacility || '' },
        orderBy: { date: 'desc' },
      },
      { enabled: !!selectedFacility },
    )

  const { data: energyCosts, isLoading: costsLoading } =
    Api.energyCost.findMany.useQuery(
      {
        where: { facilityId: selectedFacility || '' },
        orderBy: { date: 'desc' },
      },
      { enabled: !!selectedFacility },
    )

  const consumptionColumns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (date: string) => dayjs(date).format('YYYY-MM-DD'),
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount: number) => amount.toFixed(2),
    },
    { title: 'Unit', dataIndex: 'unit', key: 'unit' },
  ]

  const costColumns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (date: string) => dayjs(date).format('YYYY-MM-DD'),
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount: number) => amount.toFixed(2),
    },
    { title: 'Currency', dataIndex: 'currency', key: 'currency' },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>
          <i className="las la-building" style={{ marginRight: '8px' }}></i>
          Facility Management
        </Title>
        <Text>
          View and compare energy consumption and cost data for individual
          facilities.
        </Text>

        <Card style={{ marginTop: '24px' }}>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Text strong>Select Facility:</Text>
              <Select
                style={{ width: '100%', marginTop: '8px' }}
                placeholder="Choose a facility"
                onChange={value => setSelectedFacility(value)}
                loading={facilitiesLoading}
              >
                {facilities?.map(facility => (
                  <Option key={facility.id} value={facility.id}>
                    {facility.name}
                  </Option>
                ))}
              </Select>
            </Col>
          </Row>
        </Card>

        {selectedFacility && (
          <>
            <Card
              title={
                <Title level={4}>
                  <i className="las la-bolt" style={{ marginRight: '8px' }}></i>
                  Energy Consumption
                </Title>
              }
              style={{ marginTop: '24px' }}
            >
              {consumptionLoading ? (
                <Spin />
              ) : (
                <Table
                  dataSource={energyConsumption}
                  columns={consumptionColumns}
                  rowKey="id"
                />
              )}
            </Card>

            <Card
              title={
                <Title level={4}>
                  <i
                    className="las la-dollar-sign"
                    style={{ marginRight: '8px' }}
                  ></i>
                  Energy Costs
                </Title>
              }
              style={{ marginTop: '24px' }}
            >
              {costsLoading ? (
                <Spin />
              ) : (
                <Table
                  dataSource={energyCosts}
                  columns={costColumns}
                  rowKey="id"
                />
              )}
            </Card>
          </>
        )}
      </div>
    </PageLayout>
  )
}

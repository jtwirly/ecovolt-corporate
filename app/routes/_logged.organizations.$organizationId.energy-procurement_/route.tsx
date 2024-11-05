import React, { useState } from 'react'
import {
  Typography,
  Card,
  List,
  Button,
  Modal,
  Form,
  Input,
  InputNumber,
  message,
} from 'antd'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function EnergyProcurementPage() {
  const { organization } = useUserContext()
  const { organizationId } = useParams()
  const [isModalVisible, setIsModalVisible] = useState(false)

  const { data: recommendations, isLoading: isLoadingRecommendations } =
    Api.energyProcurement.findMany.useQuery({
      where: { organizationId },
      orderBy: { createdAt: 'desc' },
      take: 5,
    })

  const { data: alerts, isLoading: isLoadingAlerts } =
    Api.alert.findMany.useQuery({
      where: { userId: organization?.id, type: 'ENERGY_PROCUREMENT' },
      orderBy: { createdAt: 'desc' },
    })

  const { mutateAsync: createAlert } = Api.alert.create.useMutation()

  const handleCreateAlert = async (values: any) => {
    try {
      await createAlert({
        data: {
          type: 'ENERGY_PROCUREMENT',
          message: `Alert for ${values.sourceType}: ${values.condition} ${values.threshold} ${values.unit}`,
          userId: organization?.id,
          facilityId: values.facilityId,
        },
      })
      message.success('Alert created successfully')
      setIsModalVisible(false)
    } catch (error) {
      message.error('Failed to create alert')
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>
          <i className="las la-bolt"></i> Energy Procurement
        </Title>
        <Paragraph>
          View recommendations for energy purchasing and set up automated alerts
          for favorable conditions.
        </Paragraph>

        <Card
          title={
            <Title level={4}>
              <i className="las la-chart-line"></i> Recommendations
            </Title>
          }
          style={{ marginBottom: 24 }}
        >
          {isLoadingRecommendations ? (
            <Text>Loading recommendations...</Text>
          ) : (
            <List
              dataSource={recommendations}
              renderItem={item => (
                <List.Item>
                  <Text>
                    {dayjs(item.date).format('MMMM D, YYYY')}: Purchase{' '}
                    {item.amount} {item.unit} of {item.sourceType} energy
                  </Text>
                </List.Item>
              )}
              locale={{ emptyText: 'No recommendations available' }}
            />
          )}
        </Card>

        <Card
          title={
            <Title level={4}>
              <i className="las la-bell"></i> Alerts
            </Title>
          }
          extra={
            <Button onClick={() => setIsModalVisible(true)}>
              Set Up Alert
            </Button>
          }
        >
          {isLoadingAlerts ? (
            <Text>Loading alerts...</Text>
          ) : (
            <List
              dataSource={alerts}
              renderItem={item => (
                <List.Item>
                  <Text>{item.message}</Text>
                </List.Item>
              )}
              locale={{ emptyText: 'No alerts set up' }}
            />
          )}
        </Card>

        <Modal
          title="Set Up Energy Procurement Alert"
          visible={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
        >
          <Form onFinish={handleCreateAlert} layout="vertical">
            <Form.Item
              name="sourceType"
              label="Energy Source Type"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="condition"
              label="Condition"
              rules={[{ required: true }]}
            >
              <Input placeholder="e.g., less than, greater than" />
            </Form.Item>
            <Form.Item
              name="threshold"
              label="Threshold"
              rules={[{ required: true }]}
            >
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item name="unit" label="Unit" rules={[{ required: true }]}>
              <Input placeholder="e.g., kWh, USD" />
            </Form.Item>
            <Form.Item
              name="facilityId"
              label="Facility ID"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Create Alert
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </PageLayout>
  )
}

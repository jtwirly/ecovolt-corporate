import { Typography, Row, Col, Card } from 'antd'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12}>
          <Card>
            <Title level={2} style={{ textAlign: 'center' }}>
              Welcome to Energy Management System
            </Title>
            <Paragraph style={{ fontSize: '16px', textAlign: 'center' }}>
              This application helps you manage and optimize your organization's
              energy consumption and sustainability efforts.
            </Paragraph>
            <Row gutter={[16, 16]}>
              <Col span={24} md={12}>
                <Card
                  hoverable
                  onClick={() =>
                    navigate(
                      '/organizations/:organizationId/energy-consumption',
                    )
                  }
                >
                  <i
                    className="las la-bolt"
                    style={{ fontSize: '24px', color: '#1890ff' }}
                  ></i>
                  <Title level={4}>Energy Consumption Analysis</Title>
                  <Paragraph>
                    Analyze your energy consumption patterns and identify areas
                    for improvement.
                  </Paragraph>
                </Card>
              </Col>
              <Col span={24} md={12}>
                <Card
                  hoverable
                  onClick={() =>
                    navigate('/organizations/:organizationId/cost-management')
                  }
                >
                  <i
                    className="las la-dollar-sign"
                    style={{ fontSize: '24px', color: '#52c41a' }}
                  ></i>
                  <Title level={4}>Cost Management</Title>
                  <Paragraph>
                    Track and manage your energy costs to optimize your budget.
                  </Paragraph>
                </Card>
              </Col>
              <Col span={24} md={12}>
                <Card
                  hoverable
                  onClick={() =>
                    navigate('/organizations/:organizationId/sustainability')
                  }
                >
                  <i
                    className="las la-leaf"
                    style={{ fontSize: '24px', color: '#faad14' }}
                  ></i>
                  <Title level={4}>Sustainability Dashboard</Title>
                  <Paragraph>
                    Monitor your progress towards sustainability goals and
                    targets.
                  </Paragraph>
                </Card>
              </Col>
              <Col span={24} md={12}>
                <Card
                  hoverable
                  onClick={() =>
                    navigate(
                      '/organizations/:organizationId/predictive-analytics',
                    )
                  }
                >
                  <i
                    className="las la-chart-line"
                    style={{ fontSize: '24px', color: '#eb2f96' }}
                  ></i>
                  <Title level={4}>Predictive Analytics</Title>
                  <Paragraph>
                    Use advanced analytics to forecast future energy trends and
                    needs.
                  </Paragraph>
                </Card>
              </Col>
            </Row>
            <Paragraph style={{ marginTop: '24px', textAlign: 'center' }}>
              Click on any card to explore the corresponding feature. For more
              information, check out our other pages like Energy Procurement,
              Facility Management, and Reports & Analytics.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}

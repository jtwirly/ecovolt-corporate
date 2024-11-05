import { Typography, Row, Col, Card, Statistic, Button } from 'antd'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const { organization } = useUserContext()
  const { organizationId } = useParams()
  const navigate = useNavigate()

  // Fetch energy consumption data
  const { data: energyConsumptions, isLoading: isLoadingConsumption } =
    Api.energyConsumption.findMany.useQuery({
      where: { facility: { organizationId } },
      orderBy: { date: 'desc' },
      take: 1,
    })

  // Fetch energy cost data
  const { data: energyCosts, isLoading: isLoadingCost } =
    Api.energyCost.findMany.useQuery({
      where: { facility: { organizationId } },
      orderBy: { date: 'desc' },
      take: 1,
    })

  const latestConsumption = energyConsumptions?.[0]
  const latestCost = energyCosts?.[0]

  const quickLinks = [
    {
      title: 'Energy Consumption',
      path: `/organizations/${organizationId}/energy-consumption`,
      icon: 'las la-bolt',
    },
    {
      title: 'Cost Management',
      path: `/organizations/${organizationId}/cost-management`,
      icon: 'las la-dollar-sign',
    },
    {
      title: 'Sustainability',
      path: `/organizations/${organizationId}/sustainability`,
      icon: 'las la-leaf',
    },
    {
      title: 'Predictive Analytics',
      path: `/organizations/${organizationId}/predictive-analytics`,
      icon: 'las la-chart-line',
    },
    {
      title: 'Energy Procurement',
      path: `/organizations/${organizationId}/energy-procurement`,
      icon: 'las la-shopping-cart',
    },
    {
      title: 'Facility Management',
      path: `/organizations/${organizationId}/facilities`,
      icon: 'las la-building',
    },
    {
      title: 'Reports & Analytics',
      path: `/organizations/${organizationId}/reports`,
      icon: 'las la-chart-bar',
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>Energy Dashboard</Title>
        <Paragraph>
          Welcome to your organization's energy consumption and cost overview.
        </Paragraph>

        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <Card>
              <Statistic
                title="Latest Energy Consumption"
                value={latestConsumption?.amount || 0}
                suffix={latestConsumption?.unit}
                precision={2}
                loading={isLoadingConsumption}
              />
              {latestConsumption && (
                <Paragraph>
                  As of {dayjs(latestConsumption.date).format('MMMM D, YYYY')}
                </Paragraph>
              )}
            </Card>
          </Col>
          <Col xs={24} sm={12}>
            <Card>
              <Statistic
                title="Latest Energy Cost"
                value={latestCost?.amount || 0}
                prefix={latestCost?.currency === 'USD' ? '$' : ''}
                precision={2}
                loading={isLoadingCost}
              />
              {latestCost && (
                <Paragraph>
                  As of {dayjs(latestCost.date).format('MMMM D, YYYY')}
                </Paragraph>
              )}
            </Card>
          </Col>
        </Row>

        <Title level={3} style={{ marginTop: '32px' }}>
          Quick Links
        </Title>
        <Row gutter={[16, 16]}>
          {quickLinks.map(link => (
            <Col xs={24} sm={12} md={8} lg={6} key={link.title}>
              <Button
                type="default"
                icon={
                  <i className={link.icon} style={{ marginRight: '8px' }}></i>
                }
                onClick={() => navigate(link.path)}
                style={{
                  width: '100%',
                  height: 'auto',
                  padding: '12px',
                  textAlign: 'left',
                }}
              >
                {link.title}
              </Button>
            </Col>
          ))}
        </Row>
      </div>
    </PageLayout>
  )
}

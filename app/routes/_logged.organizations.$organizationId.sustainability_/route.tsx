import { Typography, Card, Row, Col, Progress, Button, DatePicker } from 'antd'
import { useState } from 'react'
const { Title, Text, Paragraph } = Typography
const { RangePicker } = DatePicker
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function SustainabilityDashboardPage() {
  const { organization } = useUserContext()
  const { organizationId } = useParams()
  const [dateRange, setDateRange] = useState<[dayjs.Dayjs, dayjs.Dayjs] | null>(
    null,
  )

  const { data: sustainabilityGoals } =
    Api.sustainabilityGoal.findMany.useQuery({
      where: { organizationId },
      include: { organization: true },
    })

  const { data: energyProcurements } = Api.energyProcurement.findMany.useQuery({
    where: { organizationId },
    include: { organization: true },
  })

  const { mutateAsync: generateReport } = Api.report.create.useMutation()

  const handleGenerateReport = async () => {
    if (!dateRange) return
    await generateReport({
      data: {
        type: 'Sustainability',
        generatedAt: dayjs().format('YYYY-MM-DD'),
        userId: organization?.id || '',
        organizationId: organizationId || '',
      },
    })
    // You might want to add a success message or redirect to the reports page here
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>Sustainability Dashboard</Title>
        <Paragraph>
          Track your organization's progress towards ESG goals, including carbon
          emissions reduction and renewable energy integration.
        </Paragraph>

        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card title="ESG Goals Progress">
              {sustainabilityGoals?.map(goal => (
                <div key={goal.id} style={{ marginBottom: '16px' }}>
                  <Text strong>{goal.description}</Text>
                  <Progress
                    percent={Math.min((goal.targetValue / 100) * 100, 100)}
                    status="active"
                    format={() => `${goal.targetValue} ${goal.unit}`}
                  />
                  <Text type="secondary">
                    Target Date: {dayjs(goal.targetDate).format('MMMM D, YYYY')}
                  </Text>
                </div>
              ))}
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card title="Renewable Energy Integration">
              {energyProcurements?.map(procurement => (
                <div key={procurement.id} style={{ marginBottom: '16px' }}>
                  <Text strong>{procurement.sourceType}</Text>
                  <Paragraph>
                    Amount: {procurement.amount.toString()} {procurement.unit}
                  </Paragraph>
                  <Text type="secondary">
                    Date: {dayjs(procurement.date).format('MMMM D, YYYY')}
                  </Text>
                </div>
              ))}
            </Card>
          </Col>
        </Row>

        <Card
          title="Generate Sustainability Report"
          style={{ marginTop: '24px' }}
        >
          <RangePicker
            style={{ marginBottom: '16px' }}
            onChange={dates =>
              setDateRange(dates as [dayjs.Dayjs, dayjs.Dayjs])
            }
          />
          <Button
            type="primary"
            icon={<i className="las la-file-alt"></i>}
            onClick={handleGenerateReport}
            disabled={!dateRange}
          >
            Generate Report
          </Button>
        </Card>
      </div>
    </PageLayout>
  )
}

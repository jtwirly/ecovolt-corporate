import React, { useState } from 'react'
import {
  Typography,
  Card,
  Row,
  Col,
  Form,
  InputNumber,
  Button,
  Spin,
  Alert,
} from 'antd'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function PredictiveAnalyticsPage() {
  const { organizationId } = useParams()
  const [forecastParams, setForecastParams] = useState({
    timeHorizon: 12,
    growthRate: 2,
  })
  const [isGenerating, setIsGenerating] = useState(false)

  const { data: facilities, isLoading: isLoadingFacilities } =
    Api.facility.findMany.useQuery({
      where: { organizationId },
    })

  const { mutateAsync: generateForecast } = Api.ai.generateText.useMutation()

  const handleParamChange = (name: string, value: number | null) => {
    setForecastParams(prev => ({ ...prev, [name]: value }))
  }

  const generateAIForecast = async () => {
    setIsGenerating(true)
    try {
      const prompt = `Generate an energy consumption and cost forecast for the next ${forecastParams.timeHorizon} months, assuming a ${forecastParams.growthRate}% annual growth rate. Format the response as JSON with monthly predictions for consumption (in kWh) and cost (in USD).`
      const response = await generateForecast({ prompt })
      const forecast = JSON.parse(response.answer)
      // Here you would typically save the forecast to your backend or state management
      console.log(forecast)
      setIsGenerating(false)
    } catch (error) {
      console.error('Error generating forecast:', error)
      setIsGenerating(false)
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>
          <i className="las la-chart-line" style={{ marginRight: '8px' }}></i>
          Predictive Analytics
        </Title>
        <Paragraph>
          Use AI-generated forecasts to plan your energy strategy and prepare
          for various scenarios.
        </Paragraph>

        <Row gutter={[16, 16]}>
          <Col xs={24} lg={12}>
            <Card
              title="Forecast Parameters"
              extra={<i className="las la-cog"></i>}
            >
              <Form layout="vertical">
                <Form.Item label="Time Horizon (months)">
                  <InputNumber
                    min={1}
                    max={60}
                    value={forecastParams.timeHorizon}
                    onChange={value => handleParamChange('timeHorizon', value)}
                  />
                </Form.Item>
                <Form.Item label="Annual Growth Rate (%)">
                  <InputNumber
                    min={-10}
                    max={10}
                    step={0.1}
                    value={forecastParams.growthRate}
                    onChange={value => handleParamChange('growthRate', value)}
                  />
                </Form.Item>
                <Button
                  type="primary"
                  onClick={generateAIForecast}
                  loading={isGenerating}
                >
                  Generate AI Forecast
                </Button>
              </Form>
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <Card
              title="Facilities Overview"
              extra={<i className="las la-building"></i>}
            >
              {isLoadingFacilities ? (
                <Spin />
              ) : facilities && facilities.length > 0 ? (
                <ul>
                  {facilities.map(facility => (
                    <li key={facility.id}>
                      <Text strong>{facility.name}</Text>
                      <br />
                      <Text type="secondary">
                        Last updated:{' '}
                        {dayjs(facility.updatedAt).format('MMMM D, YYYY')}
                      </Text>
                    </li>
                  ))}
                </ul>
              ) : (
                <Alert
                  message="No facilities found"
                  description="Add facilities to see them listed here."
                  type="info"
                />
              )}
            </Card>
          </Col>
        </Row>

        <Card
          title="Forecast Results"
          style={{ marginTop: '24px' }}
          extra={<i className="las la-chart-area"></i>}
        >
          <Paragraph>
            The AI-generated forecast will appear here after you click the
            "Generate AI Forecast" button. The forecast will show predicted
            energy consumption and costs for each month based on your input
            parameters.
          </Paragraph>
          {/* Here you would render the forecast results, potentially using a chart library */}
        </Card>
      </div>
    </PageLayout>
  )
}

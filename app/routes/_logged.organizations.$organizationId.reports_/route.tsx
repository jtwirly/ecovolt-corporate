import React, { useState } from 'react'
import {
  Typography,
  Form,
  Input,
  Select,
  Button,
  Table,
  Modal,
  DatePicker,
  message,
} from 'antd'
const { Title, Text } = Typography
const { Option } = Select
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ReportsandAnalyticsPage() {
  const { organization } = useUserContext()
  const { organizationId } = useParams()
  const navigate = useNavigate()

  const [form] = Form.useForm()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedReport, setSelectedReport] = useState(null)

  const {
    data: reports,
    isLoading,
    refetch,
  } = Api.report.findMany.useQuery({
    where: { organizationId },
    include: { user: true },
  })

  const { mutateAsync: createReport } = Api.report.create.useMutation()
  const { mutateAsync: updateReport } = Api.report.update.useMutation()
  const { mutateAsync: deleteReport } = Api.report.delete.useMutation()

  const handleCreateReport = async values => {
    try {
      await createReport({
        data: {
          ...values,
          organizationId,
          userId: organization.id,
          generatedAt: dayjs().format(),
        },
      })
      message.success('Report created successfully')
      refetch()
      setIsModalVisible(false)
    } catch (error) {
      message.error('Failed to create report')
    }
  }

  const handleUpdateReport = async values => {
    try {
      await updateReport({
        where: { id: selectedReport.id },
        data: values,
      })
      message.success('Report updated successfully')
      refetch()
      setIsModalVisible(false)
    } catch (error) {
      message.error('Failed to update report')
    }
  }

  const handleDeleteReport = async id => {
    try {
      await deleteReport({ where: { id } })
      message.success('Report deleted successfully')
      refetch()
    } catch (error) {
      message.error('Failed to delete report')
    }
  }

  const columns = [
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Generated At',
      dataIndex: 'generatedAt',
      key: 'generatedAt',
      render: text => dayjs(text).format('YYYY-MM-DD HH:mm'),
    },
    {
      title: 'Created By',
      dataIndex: ['user', 'name'],
      key: 'user',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <>
          <Button
            type="link"
            onClick={() => {
              setSelectedReport(record)
              setIsModalVisible(true)
            }}
          >
            <i className="las la-edit"></i> Edit
          </Button>
          <Button
            type="link"
            danger
            onClick={() => handleDeleteReport(record.id)}
          >
            <i className="las la-trash-alt"></i> Delete
          </Button>
        </>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
        <Title level={2}>
          <i className="las la-chart-bar"></i> Reports and Analytics
        </Title>
        <Text>
          Create custom reports and schedule automated report generation.
        </Text>

        <div style={{ marginTop: '24px', marginBottom: '24px' }}>
          <Button
            type="primary"
            onClick={() => {
              setSelectedReport(null)
              setIsModalVisible(true)
            }}
          >
            <i className="las la-plus"></i> Create New Report
          </Button>
        </div>

        <Table
          columns={columns}
          dataSource={reports}
          loading={isLoading}
          rowKey="id"
        />

        <Modal
          title={selectedReport ? 'Edit Report' : 'Create New Report'}
          visible={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
        >
          <Form
            form={form}
            onFinish={selectedReport ? handleUpdateReport : handleCreateReport}
            initialValues={selectedReport}
          >
            <Form.Item
              name="type"
              label="Report Type"
              rules={[
                { required: true, message: 'Please select a report type' },
              ]}
            >
              <Select>
                <Option value="energy_consumption">Energy Consumption</Option>
                <Option value="cost_analysis">Cost Analysis</Option>
                <Option value="sustainability">Sustainability</Option>
              </Select>
            </Form.Item>

            <Form.Item name="reportUrl" label="Report URL">
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                {selectedReport ? 'Update Report' : 'Create Report'}
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </PageLayout>
  )
}

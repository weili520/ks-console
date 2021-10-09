/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */

module.exports = {
  BASIC_INFORMATION: '基本信息',
  NAME: '名称',
  NAME_VALUE: '名称：{value}',
  ROLE: '角色',
  ROLE_PL: '角色',
  CPU_USAGE: 'CPU 用量',
  CPU_USAGE_TIME: 'CPU 用量（{time}）',
  MEMORY_USAGE: '内存用量',
  MAXIMUM_PODS: '容器组最大数量',
  MAXIMUM_PODS_SCAP: '容器组最大数量',
  MEMORY_USAGE_TIME: '内存用量（{time}）',
  POD_PL: '容器组',
  NUMBER_OF_PODS: '容器组数量',
  POD_LOW: '容器组',
  LEARN_MORE: '了解更多',
  DELETE: '删除',
  DELETE_PROJECT: '删除项目',
  LOGS: '日志',
  NO_DATA: '暂无数据',
  REFRESH: '刷新',
  DOWNLOAD: '下载',
  NO_RESOURCE: '暂时没有{resource}。',
  LOG_DATA: '日志数据',
  CANCEL: '取消',
  USERNAME: '用户名',
  PASSWORD: '密码',
  REPLICAS: '副本数量',
  CREATE_NAME: '创建{name}',
  KEY: '键',
  POLICY: '策略',
  VALUE: '值',
  DROP: '移除',
  BASE: '目标',
  STRATEGY: '策略',

  // Cluster Node List
  MASTER: '主节点',
  WORKER: '工作节点',
  CONTROL_PLANE: '控制平面',
  AGENT: '代理',
  EDGE: '边缘节点',
  ALLOCATED_CPU: '已分配 CPU',
  ALLOCATED_MEMORY: '已分配内存',
  CPU_LIMIT_SI: '资源限制：{core} 核（{percent}）',
  CPU_LIMIT_PL: '资源限制：{core} 核（{percent}）',
  CPU_REQUEST_SI: '{core} 核（{percent}）',
  CPU_REQUEST_PL: '{core} 核（{percent}）',
  CPU_CORE_PERCENT_SI: '{core} 核（{percent}）',
  CPU_CORE_PERCENT_PL: '{core} 核（{percent}）',
  MEMORY_GIB_PERCENT: '{gib} GiB（{percent}）',
  MEMORY_LIMIT_VALUE: '资源限制：{gib} GiB（{percent}）',
  MEMORY_REQUEST_VALUE: '{gib} GiB（{percent}）',
  TITLE_UNIT: '{title}（{unit}）',
  RESOURCE_REQUEST: '资源预留',
  CORDON: '停止调度',
  UNCORDON: '启用调度',
  VIEW_LOG: '查看日志',

  name: '名称',
  Ready: '就绪',
  READY_VALUE: '就绪：{readyCount}/{total}',
  STATUS_VALUE: '状态：{value}',
  STATUS: '状态',
  TYPE: '类型',
  PROJECT: '项目',
  Service: '服务',
  SERVICE: '服务',
  SERVICE_VALUE: '服务：{value}',
  SERVICE_PL: '服务',
  NUMBER_OF_SERVICES: '服务数量',
  SERVICE_LOW: '服务',
  Overview: '概览',
  OVERVIEW: '概览',
  'Node Selector': '节点选择器',
  START_TIME: '开始时间',
  END_TIME: '结束时间',
  SAMPLING_INTERVAL: '采样间隔',
  CREATED_AT: '创建时间',
  CREATED_BY: '创建者',
  UPDATED_AT: '更新时间',
  RUNNING_TIME: '运行时间',
  CUSTOM_COLUMNS: '定制内容',
  DESELECT: '取消选择',
  Monitors: '监控',
  Events: '事件',
  LABEL_PL: '标签',
  APPLICATION_WORKLOAD_PL: '应用负载',
  APPLICATION_WORKLOADS: '应用负载',
  Application: '应用',
  APPLICATION: '应用',
  Container: '容器',
  CONTAINER_PL: '容器',
  TERMINAL: '终端',
  COMMAND: '命令',
  COMMANDS: '命令',
  MAINTAINERS: '维护者',
  CREATOR: '创建者',
  POD: '容器组',
  Pods: '容器组',
  MEMORY: '内存',
  memory: '内存',
  Custom: '自定义',
  Others: '其它',
  Error: '错误',

  Platform: '平台管理',
  PLATFORM_INFORMATION: '平台信息',
  PLATFORM_VERSION: '平台版本',
  PLATFORM_ADDRESS: '平台地址',
  PLATFORM_TITLE: '平台标题',
  PLATFORM_DESCRIPTION: '平台描述',
  CLUSTER_COUNT: '集群数量',
  PLATFORM_RESOURCE: '平台资源',
  LAST_UPDATE_TIME: '最后更新时间',
  Workbench: '工作台',
  'Access Control': '访问控制',
  ACCESS_CONTROL: '访问控制',
  'App Templates': '应用模板',
  'Service Components': '服务组件',
  SYSTEM_COMPONENT_PL: '系统组件',
  Infrastructure: '基础设施',
  'Basic Information': '基本信息',
  MONITORING_AND_ALERTING: '监控告警',
  'Monitoring & Alerting': '监控告警',
  'MONITORING_&_ALERTING': '监控告警',
  CONFIGURATION_CENTER: '配置管理',
  STORAGE_MANAGEMENT: '存储管理',
  CONFIGURATION: '配置',
  PROJECT_SETTINGS: '项目设置',
  GRAYSCALE_RELEASE: '灰度发布',

  'User Manual': '使用手册',
  'API Documents': 'API 文档',

  History: '历史记录',

  RECENT_ACCESS: '最近访问',

  CLUSTERS_MANAGE_DESC:
    '对多集群以及每个集群的基础资源、服务组件和应用资源等的统一管理',
  ACCESS_CONTROL_DESC: '对平台中的企业空间、帐户、以及角色权限进行统一管理',
  APP_STORE_MANAGEMENT_DESC:
    '对云原生应用的上架、下架以及审核等应用全生命周期的统一管理',
  PLATFORM_SETTINGS_DESC: '定制化平台设置，如平台基本信息等',

  LOADING: '加载中...',
  Active: '活跃',
  Running: '运行中',
  Succeeded: '运行中',
  'Not Running': '未运行',
  Updating: '更新中',
  Warning: '异常',
  Draining: '疏散中',
  Pending: '等待中',
  Upgrading: '升级中',
  Stopped: '已停止',
  Disabled: '未启用',
  'Not Enabled': '未启用',
  Enabled: '已启用',
  ENABLED: '已启用',
  Ceased: '已销毁',
  Used: '已使用',
  USED: '已使用',
  Remain: '剩余',
  All: '全部',
  Unresolved: '待解决',
  Deleted: '已删除',
  Completed: '已完成',
  Unfinished: '未完成',
  Healthy: '健康',
  active: '活跃',
  RUNNING: '运行中',
  IMAGE_BUILDING_FAILED: '镜像创建失败',
  IMAGE_BUILDING_SUCCESSFUL: '镜像创建成功',
  BUILDING_IMAGE: '创建镜像中',
  waiting: '等待中',
  pending: '等待中',
  updating: '更新中',
  'is updating': '正在更新',
  warning: '异常',
  stopped: '已停止',
  disabled: '未启用',
  deleted: '已删除',
  unfinished: '未完成',
  terminated: '已终止',
  healthy: '健康',
  unknown: '未知',
  failed: '失败',
  Failed: '失败',
  Suspend: '暂停',

  EDIT: '编辑',
  EDIT_TITLE: '编辑{title}',
  Restart: '重启',
  PAUSE: '暂停',
  START: '启动',
  Cordon: '停止调度',
  Uncordon: '启动调度',
  Destroy: '销毁',
  Enable: '启用',
  Disable: '停用',
  RESET: '重置',
  Drain: '疏散',
  Visit: '访问',
  SELECT: '选择',
  'Select All': '选择全部',
  SELECT_ALL: '选择全部',
  VERSION: '版本',
  LATEST_VERSION: '最新版本',
  LATEST_VERSION_SCAP: '最新版本',
  Source: '来源',
  HEALTH_STATUS: '健康状态',

  EDIT_INFO: '编辑信息',
  OK: '确定',
  Cancel: '取消',
  Apply: '应用',
  CLOSE: '关闭',
  PREVIOUS: '上一步',
  NEXT: '下一步',
  Update: '更新',
  Undo: '撤销',
  SAVE: '保存',
  Create: '创建',

  PATH: '路径',
  HOST_PATH: '主机路径',
  Scheme: '方案',
  type: '类型',
  status: '状态',
  reason: '原因',
  REASON: '原因',
  message: '消息',
  MESSAGE: '消息',
  Count: '数量',
  Total: '总计',
  TOTAL: '总计',
  total: '总计',
  LEVEL: '等级',
  level: '等级',

  Unit: '单位',
  NUM_UNIT: '个',

  NOT_ENABLE: '{resource}暂未启用',
  NOT_AVAILABLE: '暂时没有可用的{resource}',
  RESOURCE_NOT_FOUND: '没有找到资源。',
  NO_AVAILABLE_RESOURCE_VALUE: '暂时无可用{resource}',
  NO_RESOURCE_FOUND: '没有找到资源',
  NO_AVAILABLE_RESOURCE: '暂无可用资源',
  'No Data': '暂无数据',
  NO_RELEVANT_DATA: '没有找到相关数据',

  or: '或',
  refresh: '刷新',
  'refresh data': '刷新数据',
  Refresh: '刷新',
  IGNORE_AND_RETRY: '忽略并重试',
  More: '更多',
  Collapse: '收起',
  View: '查看',
  Current: '当前',
  'Display all': '显示全部',
  'Display selected': '显示已选',
  Display: '显示',
  Hidden: '隐藏',
  FOLD: '折叠',
  UNFOLD: '展开',

  'Basic Info': '基本信息',
  'Pod Template': '容器组模板',
  'Volume Settings': '存储卷设置',
  VOLUME_TEMPLATES: '存储卷模板',
  VOLUME_TEMPLATE_SETTINGS: '存储卷模板设置',
  'Storage Device': '存储设备',
  'Port Settings': '端口设置',
  'Service Settings': '服务设置',
  'Health Checker': '健康检查器',
  PORT_SETTINGS: '端口设置',
  SERVICE_SETTINGS: '服务设置',
  HEALTH_CHECKER: '健康检查器',
  HEALTH_CHECK: '健康检查',
  EXTERNAL_ACCESS: '外部访问',
  'Advanced Settings': '高级设置',
  ADVANCED_SETTINGS: '高级设置',
  Settings: '设置',
  Configuration: '配置',
  MULTI_CLUSTER_DEPLOYMENT: '多集群部署',
  MULTI_CLUSTER_PROJECT_TIP: '此项目跨多个集群部署。',
  CERTIFICATE: '证书',
  CERTIFICATE_VALUE: '证书：{value}',

  'Official Document': '官网文档',

  OPTIONAL: '可选',
  PROTOCOL: '协议',
  PROTOCOL_VALUE: '协议：{value}',
  Certificate: '证书',
  key: '键',
  value: '值',
  Value: '值',
  'eg.': '例如：',
  'No.': '序号',
  KEY_IN_RESOURCE: '资源中的键',

  Add: '添加',
  ADD: '添加',
  'Add ': '添加',
  'Edit ': '编辑',
  Set: '设置',
  New: '新建',
  YES: '是',
  true: '是',
  True: '是',
  TRUE: '是',
  FALSE: '否',
  NO: '否',
  false: '否',
  False: '否',

  'MMMM Do YYYY': 'YYYY年 M月 DD日',
  'YYYY-MM-DD': 'YYYY年MM月DD日',
  'Do HH:mm': 'Do日 HH:mm',
  'Updated just now': '刚刚更新',
  'half month ago': '半个月前',
  'half month': '半个月',
  CREATE_TIME: '创建于 {diff}',
  UPDATE_TIME: '更新于 {diff}',
  MONTH_AGO: '{count} 月前',
  MONTH_TIME: '{count} 月',
  WEEK_AGO: '{count} 周前',
  WEEK_TIME: '{count} 周',
  DAY_AGO: '{count} 天前',
  DAY_TIME: '{count} 天',
  HOUR_AGO: '{count} 小时前',
  HOUR_TIME: '{count} 小时',
  MINUTE_AGO: '{count} 分钟前',
  MINUTE_TIME: '{count} 分钟',

  NAME_DESC:
    '名称只能包含小写字母、数字和连字符（-），必须以小写字母或数字开头和结尾，最长 63 个字符。',
  NAME_TOO_LONG: '最长 63 个字符',

  LONG_NAME_DESC:
    '名称只能包含小写字母、数字和连字符（-），必须以小写字母或数字开头和结尾，最长 253 个字符。',
  LONG_NAME_TOO_LONG: '最长 253 个字符',
  ALIAS_DESC: '别名可包含任意字符，最长 63 个字符。',
  LABEL_FORMAT_DESC:
    '标签的键和值只能包含字母、数字、连字符（-）、下划线（_）和句点（.），必须以数字或字母开头和结尾。键和值分别最长 63 个字符（如键包含域名则最长 253 个字符）。',
  DESCRIPTION_DESC: '描述可包含任意字符，最长 256 个字符。',
  PROJECT_DESC: '项目用于对资源进行分组管理和控制不同用户的资源管理权限。',
  MULTI_CLUSTER_PROJECT_EMPTY_DESC: '请创建一个多集群项目。',
  DESCRIPTION: '描述',

  NAME_EMPTY_DESC: '请设置一个名称。',
  ENTER_INTEGER_OR_PERCENTAGE: '请输入整数或百分比。',
  MAX_UNAVAILABLE_EMPTY:
    '请设置更新过程中允许的不可用容器组副本的最大数量或百分比。',
  MAX_EXTRA_EMPTY: '请设置更新过程中允许的多余容器组副本的最大数量或百分比。',
  'Please input value': '请输入值',
  'Please select workspace': '请选择企业空间',
  'Please select project': '请选择项目',
  VERSION_EMPTY_DESC: '请选择版本。',
  'Filter by keyword': '请输入关键字过滤',
  'Search by keyword': '请输入关键字进行查找',
  SEARCH_BY_NAME: '按名称搜索',
  NAME_VALIDATION_FAILED:
    '名称不能以 kube- 开头，该字符串为 Kubernetes 系统保留保留字符串。',
  NAME_EXIST_DESC: '名称已存在，请输入其他名称。',
  KEY_EXIST_DESC: '键已存在。',
  EMPTY_KEY_DESC: '请输入键值。',
  DUPLICATE_KEYS: '该键已经存在，请输入其他键。',
  EMPTY_KEY: '请输入一个键。',

  'Log Out': '登出',
  About: '关于',
  'User Settings': '个人设置',
  Language: '语言',

  READ: '读',
  ReadOnly: '只读',
  WRITE: '写',
  ReadAndWrite: '读写',
  'Not Mount': '不挂载',
  OUT: '出',
  IN: '入',
  Read: '读',
  READ_ONLY: '只读',
  Write: '写',
  READ_AND_WRITE: '读写',
  NOT_MOUNT: '不挂载',
  Out: '出',
  In: '入',
  Upstream: '上行',
  Downstream: '下行',
  Outbound: '流出',
  Inbound: '流入',

  exists: '已存在',

  Quota: '配额',
  'No Limit': '不限制',
  'Remaining Quota': '剩余配额',

  TOTAL_ITEMS: '总数：{num}',

  SEARCH: '搜索',

  DELETE_TITLE_SI: '删除{type}',
  DELETE_TITLE_PL: '批量删除{type}',
  DELETE_SERVICE: '删除服务',
  DELETE_MULTIPLE_SERVICES: '批量删除服务',
  DELETE_WORKLOAD: '删除工作负载',
  DELETE_MULTIPLE_WORKLOADS: '批量删除工作负载',
  DELETE_DESC:
    '确定删除{type} <strong>{resource}</strong> ? {type}删除后将无法恢复。',
  DELETE_RESOURCE_TYPE_DESC:
    '请输入{type}名称 <strong>{resource}</strong> 以确认您了解此操作的风险。',
  DELETE_RESOURCE_TYPE_DESC_SI:
    '请输入{type}名称 <strong>{resource}</strong> 以确认您了解此操作的风险。',
  DELETE_RESOURCE_TYPE_DESC_PL:
    '请输入{type}名称 <strong>{resource}</strong> 以确认您了解此操作的风险。',
  DELETE_APP_RESOURCE_TIP:
    '资源被应用 <strong>{app}</strong> 管理, 删除后可能影响此应用的正常使用。请输入{type}名称 <strong>{resource}</strong> 确保您已了解操作所带来的风险。',

  REMOVE_USER_TIP: '确定移除用户 <strong>{username}</strong> ? ',

  REMOVE_MEMBER_TIP: '确定移除成员 <strong>{resource}</strong> ?',

  REMOVE_GROUP_TIP: '确定移除组织 <strong>{resource}</strong> ?',

  'Error Tips': '错误提示',
  TIPS: '帮助信息',

  ADDED_SUCCESS_DESC: '添加成功。',
  CREATE_SUCCESSFUL: '创建成功。',
  UPDATED_SUCCESS_DESC: '更新成功。',
  DELETE_SUCCESS_DESC: '删除成功。',
  'Canceled Successfully': '取消成功',

  EVENT_NORMAL: '正常',
  EVENT_WARNING: '异常',

  EDIT_MODE: '编辑模式',
  LOAD_MORE: '加载更多',
  'All Repositories': '全部仓库',

  'Version Info': '版本信息',
  HOMEPAGE: '首页',
  'Params Configuration': '参数配置',
  ADD_PARAMETER: '添加参数',
  'Add Param': '添加参数',
  NO_PARAMETERS: '暂无参数。',
  'Back To List': '返回列表',
  SERVICE_LIST: '服务列表',
  'Time Range': '时间范围',
  'Updated at': '更新于',
  'Sure to delete': '确认删除',
  'Sure to remove': '确认移除',
  ACTIVITY: '活动',
  Task: '任务',
  Success: '成功',
  description: '描述',
  Agent: '代理',
  Confirm: '确认',
  Stage: '阶段',
  DEFAULT_VALUE: '默认值',
  Username: '用户名',
  'Unknown User': '未知用户',
  secret_text: '秘密文本',
  domain: '域名',
  Domain: '域名',
  Account: '帐户',
  Strategy: '策略',
  secret: '密钥',
  CONTRIBUTORS: '贡献者',
  EVERYONE: '所有人',
  NOBODY: '无',
  'Add Task': '添加任务',
  Optional: '可选',
  Record: '记录',
  Records: '记录',
  Detail: '详情',
  platform: '平台',
  RESELECT: '重新选择',
  body: '内容',
  Author: '作者',
  Size: '大小',
  password: '密码',
  NONE: '无',
  To: '至',
  to: '至',
  Download: '下载',
  Aborted: '已取消',
  Paused: '已暂停',
  PARAM_REQUIRED: '此参数不能为空。',
  Images: '镜像',
  filename: '文件名',
  DETAILS: '详情',
  NODES: '节点',
  FILE_OVERSIZED_TIP: '文件过大，超过 2M 不能上传！',
  'Load more': '加载更多',

  'Resource List': '资源列表',

  'Platform-level Access Control': '平台级',

  NOT_FOUND_DESC:
    '🙇 对不起没有找到相关资源，系统将在 {time}s 后返回 <a href="{link}">工作台</a>',
  DETAIL_NOT_FOUND_DESC:
    '🙇 对不起没有找到相关资源，返回 <a href="{link}">{title}</a>',
  Toolbox: '工具箱',
  TOOLBOX_DESC: '提供日志、事件、审计等相关查询工具',
  'Analysis Tools': '分析工具',
  'Control Tools': '控制工具',
  'Third-party Tools': '第三方工具',

  LOGGING: '日志',
  logging: '日志',
  Auditing: '审计',
  auditing: '审计',
  'Log Search': '日志查询',
  LOG_SEARCH_DESC: '针对企业空间、项目、资源等多维度的日志查询工具。',
  KUBECTL_DESC: '命令行工具，用于控制当前集群。',
  TOOLBOX_KUBECTL_DESC: '操作多集群的客户端命令行工具',

  KUBECONFIG_DESC: '配置文件，用于配置当前集群的访问信息。',

  event: '事件',
  events: '事件',
  EVENT_CREATE_DESC: '您可以改变搜索条件重新查询',
  'Event Search': '事件查询',
  EVENT_SEARCH_DESC: '针对企业空间、项目、资源等多维度的事件查询工具。',
  EVENT_DESC: '事件查询（Event）是KubeSphere提供的平台内资源的历史事件查询',
  'Search By Condition': '根据条件进行查找',
  'search condition': '搜索条件',
  'Search tips': '搜索提示',
  Preferences: '偏好设置',
  'Data Sources': '数据来源: 内置服务',
  'Number of events': '事件数量',
  'workspaces found': '共找到 {count} 个企业空间',
  'rules text': '如何定义操作审计收集规则？ 🤔',
  'rules desc':
    'KubeSphere可以根据您设置的规则进行操作审计的收集，点击查看如何定义规则。',
  CATEGORY: '分类',
  Resource: '资源',
  'Earliest start time': '最早发生时间',
  'Most recent start time': '最近发生时间',
  'Related resources': '关联资源',
  'Operation details': '操作详情',
  'Event metadata': '事件元数据',

  'Auditing Operating': '操作审计',
  AUDITING_OPERATING_DESC:
    '针对企业空间、项目、资源等多维度的操作审计查询工具。',
  verb: '操作行为',
  'Operation Account': '操作帐户',
  'Source IP': '来源 IP',
  Subresource: '子资源',
  'Status Code': '状态码',

  NanoSeconds: '纳秒',
  MicroSeconds: '微秒',
  MilliSeconds: '毫秒',
  Seconds: '秒',
  Minutes: '分钟',
  Hours: '小时',
  Days: '天',

  unit: '单位',
  time: '时间',
  email: '邮件',
  REQUIRED: '必填',
  Successful: '成功',
  Unknown: '未知',
  NOT_RUNNING_YET: '未运行',
  successful: '成功',
  Tag: '标签',
  PATTERN_NAME_INVALID_TIP:
    '名称无效。名称只能包含小写字母、数字、或连字符（-）。',
  NO_MATCHING_RESULT_FOUND: '没有找到匹配的结果',
  'You can try to': '您可以尝试',
  'clear search conditions': '清空搜索条件。',
  CONTENT_NOT_SAVED_TIPS: '内容已经修改但并未保存',
  SAVE_EDIT_HINTS: '请确认修改的内容是正确的，您可以保存设置或者取消设置。',

  IN_PROGRESS: '设置中',
  CURRENT: '当前',
  CURRENT_VALUE: '当前：{value}',
  TARGET_CURRENT: '{target}（当前：{current}）',
  NOT_SET: '未设置',
  FINISHED: '已设置',

  'Learn more': '了解更多',

  KS_DESCRIPTION:
    'KubeSphere 是一款开源项目，在目前主流容器调度平台 Kubernetes 之上构建的企业级分布式多租户容器管理平台，提供简单易用的操作界面以及向导式操作方式，在降低用户使用容器调度平台学习成本的同时，极大降低开发、测试、运维的日常工作的复杂度。',

  REPS_ADDRESS: '项目地址',
  ISSUE_FEEDBACK: '问题反馈',
  PART_IN_DISCUSSION: '参与讨论',
  CODE_CONTRIBUTE: '贡献代码',
  GITHUB_STAR: '点亮Star',

  CONDITION_STATUS_ANALYSE: '状态分析（Conditions）',

  NAV_PROJECTS: '项目',
  NAV_ACCOUNTS: '帐户管理',

  'Session timeout or this account is logged in elsewhere, please login again':
    '会话超时或此帐户在其它地方登录，请重新登录',

  NOTE: '备注',

  VolumeSnapshot: '存储卷快照',
  VOLUME_SNAPSHOT: '存储卷快照',
  VOLUME_SNAPSHOT_PL: '存储卷快照',
  VOLUMESNAPSHOT_LOW: '存储卷快照',
  'Volume Snapshot': '存储卷快照',

  CREATE_STATUS_SUCCESS: '创建成功',
  CREATE_STATUS_UPDATING: '创建中',
  CREATE_STATUS_FAILED: '创建失败',
  CREATE_STATUS_DELETING: '删除中',

  DATA_SOURCE: '数据源',

  EMPTY_WRAPPER: '没有找到{resource}',

  'User Guides': '用户指南',
  'Quick Support': '快速获取帮助',
  'Developer Community': '开发者社区',
  NO_HISTORY_TITLE: '没有找到最近访问的资源',
  NO_HISTORY_DESC: '您可以对平台资源进行访问。',
  USER_GUIDES_DESC: '最详尽的 KubeSphere 用户指南文档',
  DEVELOPER_DESC: '通过在开发者社区提出问题获得帮助',
  API_DOCS_DESC: '最详尽的 KubeSphere API 文档',
  GITHUB_ISSUES_DESC: '通过在 GitHub 提出 Issue 获得帮助',

  ENV_PRODUCTION: '生产环境',
  ENV_DEVELOPMENT: '开发环境',
  ENV_TESTING: '测试环境',
  ENV_DEMO: '演示环境',

  HOW_TO_MODIFY_PLATFORM_INFO: '如何定制化平台信息?',
  PLATFORM_INFO_DESC: '平台的信息概览，您可以查看和定制化平台信息。',
  PLATFORM_SETTINGS_SELECTOR_DESC: '定制化平台的系统配置',

  EVENT_AGE: '发生时间',
  EVENT_AGE_DATA: '{lastTime}<br/>（近 {duration}发生 {count} 次)',
  EVENT_AGE_DATA_TWICE: '{lastTime}<br/>（近 {duration}发生 2 次）',
  SOURCE: '来源',

  CREATE_BY_YAML_DESC: '在 YAML 文件中自定义应用的设置。',
  Bill: '资源消费统计',
  BILLING_OPERATING_DESC: '查看消费情况',

  // Workbench
  CLUSTER_COUNT_SI: '集群数量',
  CLUSTER_COUNT_PL: '集群数量',
  LAST_LOGIN_TIME: '最后登录时间：',
  APP_TEMPLATE_SCAP_PL: '应用模板',
  ACCOUNT_PL: '账户',

  // Container Details Page
  CONTAINER_DETAILS_PAGE_SCAP: '容器详情页。',
  CPU_VALUE: 'CPU：{value}',
  MEMORY_VALUE: '内存：{value}',
}

/**
 * 导航全局变量的定义
 */

// 一级菜单


// 我的看板
const MY_BOARD = 'MY_BOARD';
// 查询
const QUERY = 'QUERY';
// 分析应用
const ANALYSE_APPLY = 'ANALYSE_APPLY';
// 资源管理
const RESOURCE_MANAGEMENT = 'RESOURCE_MANAGEMENT';


// 二级菜单

// SQL查询
const SQL_QUERY = 'SQL_QUERY';
// 指标提取工具
const QUOTA_TOOL = 'QUOTA_TOOL';
// dashboard
const DASHBOARD = 'DASHBOARD';
// 邮件报表
const EMAIL_REPORT = 'EMAIL_REPORT';
// 取数模板
const FETCH_TEMPLATE = 'FETCH_TEMPLATE';
// 权限管理
const AUTHORITY_MANAGEMENT = 'AUTHORITY_MANAGEMENT';
// 上下线管理
const ON_OFF_LINE_MANAGEMENT = 'ON_OFF_LINE_MANAGEMENT';
// 指标管理
const QUOTA_MANAGEMENT = 'QUOTA_MANAGEMENT';
// portal
const PORTAL = 'PORTAL';

export default [
    {
        key: MY_BOARD,
        value: '我的看板',
        url: null,
        submenu: false
    },
    {
        key: QUERY,
        value: '查询',
        submenu: true,
        children: [
            {
                key: SQL_QUERY,
                value: 'SQL查询',
                url: null,
                submenu: false
            },
            {
                key: QUOTA_TOOL,
                value: '指标提取工具',
                url: null,
                submenu: false
            }
        ]
    },
    {
        key: ANALYSE_APPLY,
        value: '分析应用',
        submenu: true,
        children: [
            {
                key: DASHBOARD,
                value: 'dashboard',
                url: null,
                submenu: false
            },
            {
                key: EMAIL_REPORT,
                value: '邮件报表',
                url: null,
                submenu: false
            },
            {
                key: FETCH_TEMPLATE,
                value: '取数模板',
                url: null,
                submenu: false
            }
        ]
    },
    {
        key: RESOURCE_MANAGEMENT,
        value: '资源管理',
        submenu: true,
        children: [
            {
                key: AUTHORITY_MANAGEMENT,
                value: '权限管理',
                url: null,
                submenu: false
            },
            {
                key: ON_OFF_LINE_MANAGEMENT,
                value: '上线线管理',
                url: null,
                submenu: false
            },
            {
                key: QUOTA_MANAGEMENT,
                value: '指标管理',
                url: null,
                submenu: false
            },
            {
                key: PORTAL,
                value: 'portal',
                url: null,
                submenu: false
            }
        ]
    }
];

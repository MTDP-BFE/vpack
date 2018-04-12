import axios from 'axios';
import qs from 'qs';
import config from './config';
{{#useUI}}
import { Message } from 'element-ui';
{{/useUI}}

const service = axios.create(config);

// POST传参序列化(添加请求拦截器)
service.interceptors.request.use(
    config => {
        // 在发送请求之前做某件事
        if (
            config.method === 'post' ||
            config.method === 'put' ||
            config.method === 'delete'
        ) {
            // 序列化
            config.data = qs.parse(config.data);
        }
        return config;
    },
    error => {
        {{#if_not useUI}}
        alert('报错信息');
        {{/if_not}}
        {{#useUI}}
        Message({
            showClose: true,
            type: 'warning',
            message: '报错信息'
        });
        {{/useUI}}
        return Promise.reject(error);
    }
);

// 返回状态判断(添加响应拦截器)
service.interceptors.response.use(
    res => {
        const data = res.data;
        if (data && data.code !== 0 && data.code !== 200) {
            {{#if_not useUI}}
            alert('报错信息');
            {{/if_not}}
            {{#useUI}}
            Message({
                showClose: true,
                type: 'warning',
                message: data.code > -1
                    ? data.message
                    : '报错信息'
            });
            {{/useUI}}
            return Promise.reject(data.message);
        }
        return res;
    },
    error => {
        {{#if_not useUI}}
        alert('报错信息');
        {{/if_not}}
        {{#useUI}}
        Message({
            showClose: true,
            type: 'warning',
            message: '报错信息'
        });
        {{/useUI}}
        return Promise.reject(error);
    }
);

// 对axios的实例重新封装成一个plugin ,方便 Vue.use(xxxx)
export default service;

/* 所有接口 */
import request from './../service/';

// 测试
/**
 * 测试get请求
 * @param {Object} sendDatas 向后台发送的参数
 * @returns {Object} 返回的数据
 */
const url = 'http://easy-mock.com/mock/5948977d8ac26d795f409ac7/test/test';

export const getTestData = async (sendData) => {
    const data = await request({
        url: url,
        method: 'get',
        params: sendData
    });
    return data;
};

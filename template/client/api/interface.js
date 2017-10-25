/* 所有接口 */
import request from './../service/';

// 测试
/**
 * 测试get请求
 * @param {Object} sendDatas 向后台发送的参数
 * @returns {Object} 返回的数据
 */

// test mock 请自行更改
const url = 'http://easy-mock.com/mock/5948977d8ac26d795f409ac7/test/test';

const url2 = 'http://easy-mock.com/mock/59094a1d7a878d73716e82c7/api/list2';

export const getTestData = async (sendData) => {
    const data = await request({
        url: url,
        method: 'get',
        params: sendData
    });
    return data;
};

export const postTestData = async () => {
    const sendData = { a: 1 };
    const data = await request({
        url: url2,
        method: 'post',
        data: sendData
    });
    return data;
};

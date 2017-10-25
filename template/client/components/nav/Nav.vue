<template>
    <div>
        <el-menu class="cq-header-menu" mode="horizontal" menu-trigger="hover" unique-opened>
            <li class="el-submenu">
                <div class="logo" @click="backHome"><span class="light">MD</span>BI</div>
            </li>
            <menu-list></menu-list>
            <li class="el-submenu right-list">
                <div class="el-submenu__title">
                    <el-input class="search-input" placeholder="搜索库表,指标,Dashboard等" @keyup.enter.native="searchResource" ref="navSearch"></el-input>
                    <i class="bfui-icon bfui-icon-search search-icon" @click="searchResource"></i>
                    <i class="bfui-icon bfui-icon-book search-resource"></i>
                    <i class="bfui-icon bfui-icon-question-circle help"></i>
                    <el-dropdown>
                        <span class="el-dropdown-link user-header">
                            <img class="user" :src="userImg" width="30px"></img>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <div class="cq-header-user-drop">
                                <div class="header-user">
                                    <img class="user-img" :src="userImg" width="40px"></img>
                                    <div class="user-name">{{userName}}</div>
                                </div>
                                <div class="drop-item logout" @click="logout">
                                    <i class="bfui-icon bfui-icon-sign-out"></i>
                                    退出账号
                                </div>
                            </div>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </li>
        </el-menu>
    </div>
</template>

<script>
import menuList from './MenuList'
export default {
    components: {
        menuList
    },
    data() {
        return {
            userImg: 'https://s3.meituan.net/v1/mss_814dc1610cda4b2e8febd6ea2c809db5/apps-open/887ec1e2-2ffa-4462-bc2b-05ca1a04d343_1508833993457?filename=images.jpg',
            userName: '张三疯'
        }
    },
    methods: {
        backHome() {
            window.location.href = 'http://www.baidu.com'
        },
        searchResource() {
            const value = this.$refs.navSearch.currentValue;
            window.location.href = `http://www.baidu.com/s?word=${value}`;
        },
        logout () {
            alert('退出');
        }
    },
    created() {

    }
}
</script>

<style lang="postcss">
.cq-header-menu {
    background: #fff;
    .el-menu-item {
        height: 50px;
        line-height: 50px;
        min-width: 140px;
        font-size: 14px;
    }
    .el-submenu {
        min-width: 130px;
        .el-submenu__title {
            height: 50px;
            line-height: 50px;
            font-size: 14px;
            &:hover {
                font-size: 14px;
                background-color: #fff;
            }
            .el-submenu__icon-arrow {
                margin-left: 10px;
                margin-top: 1px;
                color: #ccc;
            }
        }
        .el-menu {
            top: 50px;
            border-top: 0;
            .el-menu-item {
                &:first-child {
                    font-size: 12px;
                    text-align: left;
                    line-height: 24px;
                    height: 24px;
                    color: #9B9B9B;
                    &:hover{
                        background-color: #fff;
                    }
                }
            }
        }
        .logo {
            font-size: 24px;
            font-family: Arial-Black;
            color: #000;
            position: relative;
            top: 8px;
            cursor: pointer;
            letter-spacing: 1.2px;
            .light {
                color: #4b75fb;
            }
        }
    }
    .el-icon-caret-bottom {
        &:before{
            content: '\E600';
        }
    }
    .right-list {
        float: right;
        .search-input {
            width: 220px;
            input {
                width: 100%;
                font-size: 12px;
                border-radius: 20px;
                padding: 0 30px 0 10px;
            }
        }
        .bfui-icon {
            margin: 0 20px 0 0;
            font-size: 20px;
            top: 3px;
            position: relative;
            color: #6B708B;
        }
        .search-icon {
            margin: 0;
            position: relative;
            left: -35px;
        }
        .user-header {
            .user {
                top: 10px;
                position: relative;
                border-radius: 50%;
            }
        }
    }
    .el-submenu:hover .el-submenu__title {
        border-bottom-color: #fff;
    }
}
.cq-header-user-drop {
    color: #6B708B;
    width: 140px;
    .header-user {
        text-align: center;
        border-bottom: 1px solid #EEF0F2;
        margin: 0 10px;
        padding: 0 0 8px 0;
        .user-img {
            top: 10px;
            position: relative;
            border-radius: 50%;
            margin-bottom: 6px;
        }
        .user-name {
            font-size: 12px;
        }
    }
    .drop-item {
        height: 36px;
        line-height: 36px;
        font-size: 12px;
        padding: 0 0 0 10px;
        cursor: pointer;
    }
}
</style>

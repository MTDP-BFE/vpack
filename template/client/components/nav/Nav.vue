<script>
import menuLists from './nav.config';
export default {
    name: 'Nav',
    render(createElement) {
        const renderMenuLists = function(menuLists, createElement) {
            return menuLists.map(menuItem => {
                if (menuItem.submenu) {
                    return createElement(
                        'el-submenu',
                        {
                            props: {
                                index: menuItem.key,
                            },
                            scopedSlots: {
                                title: function() {
                                    return menuItem.value;
                                }
                            }
                        },
                        [
                            ...renderMenuLists(menuItem.children, createElement)
                        ]
                    );
                }
                return createElement(
                    'el-menu-item',
                    {
                        props: {
                            index: menuItem.key
                        }
                    },
                    [
                        menuItem.value
                    ]
                );
            });
        };
        return createElement(
            'div',
            [
                createElement(
                    'el-menu',
                    // 把mode和menu-trigger放在一起会报错不知道什么原因
                    // 只有一个mode时放在attrs和props中都会生效,不知道原理是什么
                    {
                        attrs: {
                            'menu-trigger': 'click',
                            'unique-opened': true
                        },
                        props: {
                            mode: 'horizontal'
                        }
                    },
                    [
                        <li class="el-submenu">
                            <div class="el-submenu__title logo">MDBI</div>
                        </li>,
                        ...renderMenuLists(menuLists, createElement),
                        <li class="el-submenu right-list">
                            <div class="el-submenu__title">
                                <i class="bfui-icon-book search-icon"></i>
                                <el-input class="search-input" placeholder="请输入内容"></el-input>
                                <i class="bfui-icon-question-circle"></i>
                                <span class="user-name">张三</span>
                            </div>
                        </li>
                    ]
                )
            ]
        );
    }
};
</script>

<style>
.el-menu{
    font-size: 16px;
    background: #fff;
    .el-menu-item{
        height: 50px;
        line-height: 50px;
    }
    .el-submenu{
        .el-submenu__title{
            height: 50px;
            line-height: 50px;
            &:hover{
                background-color: #fff;
            }
        }
    }
    .logo{
        font-size: 24px;
    }
    .el-icon-caret-bottom{
        &:before{
            content: '\E600';
        }
    }
    .right-list{
        float: right;
        i{
            font-size: 28px;
            position: relative;
            top: 4px;
        }
        .search-input{
            margin-left: 10px;
            input{
                width: auto;
                border-radius: 20px;
            }
        }
        .search-input{
            width: auto;
            height: 50px;
            line-height: 50px;
        }
        .bfui-icon-question-circle{
            margin-left: 30px;
        }
        .user-name{
            margin: 0 20px;
        }
    }

    .el-submenu:hover .el-submenu__title{
        border-bottom-color: #fff;
    }
}
</style>

<script>
/**
 *
 * 想递归去渲染导航，因为没有导航都有子导航，如果写模板的话要写很多，且之后如果导航变的话模板也要做对应改变
 * 有template时好像无法使用render
 * template中没有办法向react一样使用jsx
 * 所以就使用了render去做了处理，递归的渲染导航
 *
*/
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
                                <el-input class="search-input" v-model="input" placeholder="请输入内容"></el-input>
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
    background: #fff;
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
        }
        .bfui-icon-question-circle{
            margin-left: 30px;
        }
        .user-name{
            position: relative;
            top: -2px;
            margin: 0 20px;
        }
    }
}
</style>

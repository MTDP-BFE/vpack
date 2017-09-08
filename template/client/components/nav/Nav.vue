<template>
    <div class="nav">

    </div>
</template>

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
                'jijij',
                createElement('h1', '一则头条'),
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
                        ...renderMenuLists(menuLists, createElement)
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
}
</style>

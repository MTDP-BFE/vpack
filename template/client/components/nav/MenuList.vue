<script>
import nav from './nav.config';
const {menuLists} = nav;
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
                            },
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
                        },
                        on: {
                            click: function() {
                                if (menuItem.url) {
                                    window.location.href = menuItem.url;
                                }
                            }
                        }
                    },
                    [
                        menuItem.value
                    ]
                );
            });
        };
        return createElement(
            'span',
            [
                    [
                        ...renderMenuLists(menuLists, createElement),
                    ]
            ]
        );
    }
};
</script>

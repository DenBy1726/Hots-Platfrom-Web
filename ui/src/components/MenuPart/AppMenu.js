/**
 * Created by Denis on 29.04.2018.
 */
import React, {Component} from "react"
import propTypes from "prop-types"
import {Icon, Layout, Menu} from "antd";

export default class AppMenu extends Component {

    renderMenuItem = (item, index, itemStyle, deep) => {
        if (item.children === undefined) {
            return <Menu.Item
                style={itemStyle}
                key={item.id}
                disabled={item.disabled}
            >
                <Icon type={item.icon}/>
                <span>{item.label}</span>
            </Menu.Item>
        } else {
            return <Menu.SubMenu
                style={itemStyle}
                key={item.id}
                disabled={item.disabled}
                title={
                    <span>
                    <Icon type={item.icon}/>
                    <span>{item.label}</span>
                </span>
                }
            >
                {
                    item.children.map((item, index) => {
                        return this.renderMenuItem(item, index, itemStyle, deep + 1)
                    })
                }
            </Menu.SubMenu>
        }
    };

    render() {
        const {
            menu, collapsed, toggleCollapsed, menuItemStyle, menuContainerStyle, siderClass,
            menuTheme, menuMode, selectedItem, onClick
        } = this.props;
        return <Layout style={menuContainerStyle}>
            <Layout.Sider className={siderClass}
                          collapsible
                          collapsed={collapsed}
                          onCollapse={toggleCollapsed}
            >
                <Menu
                    style={menuItemStyle}
                    theme={menuTheme}
                    defaultSelectedKeys={[selectedItem]}
                    mode={menuMode}
                    onClick={onClick}
                >
                    {
                        menu.map((item, index) => {
                            return this.renderMenuItem(item, index, menuItemStyle, 0);
                        })
                    }
                </Menu>
            </Layout.Sider>
        </Layout>
    }
}

AppMenu.propTypes = {
    collapsed: propTypes.bool.isRequired,
    menu: propTypes.array.isRequired,
    menuContainerStyle: propTypes.object.isRequired,
    menuItemStyle: propTypes.object.isRequired,
    menuMode: propTypes.string.isRequired,
    menuTheme: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired,
    siderClass: propTypes.string.isRequired,
    selectedItem: propTypes.string.isRequired,
    toggleCollapsed: propTypes.func.isRequired,

};

AppMenu.defaultProps = {
    menuMode: "inline",
    menuTheme: "dark",
    onClick: () => {
    },
    toggleCollapsed: () => {
    },
};
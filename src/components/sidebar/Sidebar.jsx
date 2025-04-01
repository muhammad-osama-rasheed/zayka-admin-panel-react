import * as Icon from "react-icons/io5";
import styles from "./Sidebar.module.css";

function Sidebar({ showMenu, setShowMenu, activeIndex, setActiveIndex }) {
  const menuItems = [
    {
      id: 1,
      name: "Home",
      icon:
        activeIndex === 0 ? (
          <Icon.IoHome className={styles.icon} />
        ) : (
          <Icon.IoHomeOutline className={styles.icon} />
        ),
    },
    {
      id: 2,
      name: "Products",
      icon:
        activeIndex === 1 ? (
          <Icon.IoGrid className={styles.icon} />
        ) : (
          <Icon.IoGridOutline className={styles.icon} />
        ),
    },
    {
      id: 3,
      name: "Orders",
      icon:
        activeIndex === 2 ? (
          <Icon.IoBagCheck className={styles.icon} />
        ) : (
          <Icon.IoBagCheckOutline className={styles.icon} />
        ),
    },
    {
      id: 4,
      name: "Categories",
      icon:
        activeIndex === 3 ? (
          <Icon.IoPricetag className={styles.icon} />
        ) : (
          <Icon.IoPricetagOutline gCheckOutline className={styles.icon} />
        ),
    },
    {
      id: 5,
      name: "Users & Admins",
      icon:
        activeIndex === 4 ? (
          <Icon.IoPeople className={styles.icon} />
        ) : (
          <Icon.IoPeopleOutline className={styles.icon} />
        ),
    },
    {
      id: 6,
      name: "Reviews",
      icon:
        activeIndex === 5 ? (
          <Icon.IoBarChart className={styles.icon} />
        ) : (
          <Icon.IoBarChartOutline className={styles.icon} />
        ),
    },
    {
      id: 7,
      name: "Logout",
      icon:
        activeIndex === 6 ? (
          <Icon.IoLogOut className={styles.icon} />
        ) : (
          <Icon.IoLogOutOutline className={styles.icon} />
        ),
    },
  ];

  return (
    <>
      {!showMenu && (
        <div className={styles.overlay} onClick={() => setShowMenu(true)}></div>
      )}
      <div className={showMenu ? styles.closeNavigation : styles.navigation}>
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={item.id}
              className={
                activeIndex === index ? styles.active : styles.unActive
              }
              onClick={() => {
                setActiveIndex(index);
                setShowMenu(true);
              }}
            >
              <a href="#">
                <span className={styles.iconContainer}>{item.icon}</span>
                <span className={styles.title}>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;

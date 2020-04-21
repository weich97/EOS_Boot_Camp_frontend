import React from 'react';
import CustomScrollbars from 'util/CustomScrollbars';
import Navigation from "../../components/Navigation";

const SideBarContent = () => {
  const navigationMenus = [
    {
      name: 'sidebar.main',
      type: 'section',
      children: [
        {
          name: 'sidebar.dashboard',
          icon: 'view-dashboard',
          type: 'collapse',
          children: [
            {
              name: 'sidebar.dashboard.listing',
              type: 'item',
              link: '/app/dashboard/listing'
            },
          ],
        },
      ]
    },
    {
      name: 'sidebar.modules',
      type: 'section',
      children:[
        {
          name: 'sidebar.carpool',
          type: 'collapse',
          icon: 'email',
          children: [
            {
              name: 'sidebar.postrip',
              type: 'item',
              icon: 'email',
              link: '/app/carpool/post-trip'
            },
            {
              name: 'sidebar.searchtrip',
              type: 'item',
              icon: 'email',
              link: '/app/carpool/search-for-trip'
            },
          ]
        },
        {
          name: 'sidebar.ticketbidding',
          type: 'item',
          icon: 'email',
          link: '/app/social-apps/wall'
        },
        {
          name: 'sidebar.tradeticket',
          type: 'item',
          icon: 'email',
          link: '/app/social-apps/wall'
        },
        {
          name: 'sidebar.trackticket',
          type: 'item',
          icon: 'email',
          link: '/app/social-apps/wall'
        },
      ]
    },
    {
      name: 'sidebar.settings',
      type: 'section',
      children:[
        {
          name: 'sidebar.aboutus',
          type: 'item',
          link: '/app/about-us',
          icon: 'view-dashboard'
        },
        {
          name: 'sidebar.profile',
          type: 'item',
          icon: 'email',
          link: '/app/social-apps/profile'
        },
        {
          name: 'sidebar.wall',
          type: 'item',
          icon: 'email',
          link: '/app/social-apps/wall'
        }

      ]
    },
    
  ];

  return (
    <CustomScrollbars className=" scrollbar">
      <Navigation menuItems={navigationMenus}/>
    </CustomScrollbars>
  );
};

export default SideBarContent;

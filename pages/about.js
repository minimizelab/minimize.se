import React from 'react';
import SideNav from '../components/SideNav';

const About = () => (
  <>
    <div>about</div>
    <SideNav
      title={'start'}
      position={'right'}
      nextPage={'/index'}
      bgColor={'terracotta'}
      titleColor={'miniBlue'}
    />
  </>
);

export default About;

import './layout.less';

import { BusinessHeader, Footer, MiniHeader } from '@leke/rc';

import React from 'react';
import { useTitle } from '@hooks/index';

interface LayoutProps {
  children: any
};

const Layout = (props: LayoutProps) => {
  useTitle('提分王');
  return (
    <div className="score-king">
      <MiniHeader />
      <BusinessHeader
        icon="brushquestionking"
        title="提分王"
        projectName="brushquestionking"
        defaultSubs={false}
      />
      <div className="main-content">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

// 如果你导出的是type，会保证在编译去掉
export type { LayoutProps };

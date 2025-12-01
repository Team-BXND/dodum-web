import { createBrowserRouter, Navigate } from 'react-router';
import App from './App';
import Competition_info from '@/pages/competition_info/Info/Competition_info_writing.tsx';
import AddInfo from '@/pages/competition_info/Add/AddInfo.tsx';
import Competition_info_writing from '@/pages/competition_info/Info/Competition_info_writing.tsx';
import Modify from './pages/competition_info/Modify/Modify';
import Major from '@/pages/Major/Major';
import MajorResult from '@/pages/Major/Result/MajorResult';
// Archive
import Archive from '@/pages/Archive/Archive';
import Detail from '@/pages/Archive/pages/Detail';
import CategoryRoute from '@/pages/Archive/CategoryRoute';
import AddArchive from '@/pages/Archive/pages/AddArchive';
import EditArchive from '@/pages/Archive/pages/EditArchive';

// Info 페이지
import Info from './pages/info/infoView';
// OtherInfo (etc)
import OtherInfo from './pages/OtherInfo/pages/OtherInfo';
import Posts from './pages/OtherInfo/pages/Posts';
import AddEtcInfo from './pages/OtherInfo/pages/AddEtcInfo';
import EtcDetail from './pages/OtherInfo/pages/Detail';
import AlterPage from './pages/info/AlterPages.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'major',
        element: <Major />,
      },
      {
        path:"competition_info",
        element:<Competition_info/>
      },
      {
        path:"add_info",
        element:<AddInfo/>
      },
      {
        path:"competition_info_writing/:id",
        element:<Competition_info_writing />
      },
      {
        path:"modify/:id",
        element:<Modify />
      },
      {
        path: 'major/result',
        element: <MajorResult />,
      },
      {
        path: 'info',
        element:
        <PageProvider>
          <Info/>
        </PageProvider>
      },
      {
        path: 'info/:id',
        element: <InfoDetail />,
      },
      {
        path: 'info/add',
        element: <AddInfo/>,
      },
      {
        path: 'info/alter',
        element: <AlterPage/>,
      },
      {
        path: 'major/result',
        element: <MajorResult />,
      },
      {
        path: 'archive',
        element: <Archive />,
        children: [
          { index: true, element: <Navigate to="club" replace /> },
          { path: ':category', element: <CategoryRoute /> },
          { path: ':category/:postId', element: <Detail /> },
          { path: 'add', element: <AddArchive /> },
          { path: 'edit/:postId', element: <EditArchive /> },
        ],
      },
      {
        path: 'info',
        element: <Info />,
      },
      {
        path: 'etc',
        element: <OtherInfo />,
        children: [
          {
            index: true,
            element: <Navigate to="all" replace />,
          },
          {
            path: 'all',
            element: <Posts category='전체'/>
          },
          {
            path: 'benefits',
            element: <Posts category='학교지원'/>
          },
          {
            path: 'tools',
            element: <Posts category='개발도구' />
          },
          {
            path: 'courses',
            element: <Posts category='강의추천' />
          },
          {
            path: 'add',
            element: <AddEtcInfo />
          },
          {
            path: 'edit/:postId',
            element: <EditArchive />
          },
        ]
      },
      {
        path: 'etc/:category/:postId',
          element: <EtcDetail />
      },
    ],
  },
]);


export default router;

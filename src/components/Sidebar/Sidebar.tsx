import DodumLogo from '@/assets/dodum-logo.svg';
import DodumLogoUrl from '@/assets/dodum-logo.svg?url';

function Sidebar() {
  return (
    <>
      <DodumLogo />
      <img src={DodumLogoUrl} alt="Dodum Logo" />
    </>
  );
}

export default Sidebar;

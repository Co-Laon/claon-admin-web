import CenterManageIcon from '@/assets/LNB/CenterManageIcon';
import CrewManageIcon from '@/assets/LNB/CrewManageIcon';
import ScheduleManageIcon from '@/assets/LNB/ScheduleManageIcon';
import SearchIcon from '@/assets/SearchIcon';

interface MenuIconProps {
  icon: string;
}

export default function MenuIcon({ icon }: MenuIconProps) {
  switch (icon) {
    case 'Center':
      return <CenterManageIcon />;
    case 'User':
      return <CrewManageIcon />;
    case 'Schedule':
      return <ScheduleManageIcon />;
    case 'Matching':
      return <SearchIcon />;
    default:
      return <div />;
  }
}

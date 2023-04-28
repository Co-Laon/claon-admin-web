import CenterManageIcon from '@/assets/LNB/CenterManageIcon';
import CrewManageIcon from '@/assets/LNB/CrewManageIcon';
import ScheduleManageIcon from '@/assets/LNB/ScheduleManageIcon';
import SearchIcon from '@/assets/SearchIcon';
import SettingIcon from '@/assets/SettingIcon';

interface MenuIconProps {
  iconType: string;
  fill?: string;
}

export default function MenuIcon({ iconType, fill }: MenuIconProps) {
  const color = fill || '#ffffff';

  switch (iconType) {
    case 'CenterManage':
      return <CenterManageIcon width={24} height={24} fill={color} />;
    case 'CrewManage':
      return <CrewManageIcon width={24} height={24} fill={color} />;
    case 'ScheduleManage':
      return <ScheduleManageIcon width={24} height={24} fill={color} />;
    case 'MatchingManage':
      return <SearchIcon width={24} height={24} fill={color} />;
    case 'SettingManage':
      return <SettingIcon width={24} height={24} fill={color} />;
    default:
      return <div />;
  }
}

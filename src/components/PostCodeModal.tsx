import { Address, Search, State } from 'react-daum-postcode/lib/loadPostcode';
import { Box, Modal } from '@mui/material';
import PostCodeEmbed from './PostCodeEmbed';

const modalBoxStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 360,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 0,
};

const postcodeTheme = {
  theme: {
    bgColor: '#FFFBFE', // 바탕 배경색
    searchBgColor: '#FFFBFE', // 검색창 배경색
    contentBgColor: '#FFFBFE', // 본문 배경색(검색결과,결과없음,첫화면,검색서제스트)
    pageBgColor: '#FFFBFE', // 페이지 배경색
    // textColor: "", //기본 글자색
    // queryTextColor: "", //검색창 글자색
    // postcodeTextColor: "", //우편번호 글자색
    // emphTextColor: "", //강조 글자색
    // outlineColor: "", //테두리
  },
};

interface PostCodeModalProps {
  open: boolean;
  onComplete?: (data?: string) => void;
  onSearch?: (data?: Search) => void;
  onClose?: (data?: State) => void;
  defaultQuery?: string;
}

function PostCodeModal({
  open,
  onComplete,
  onSearch,
  onClose,
  defaultQuery,
}: PostCodeModalProps) {
  const handleComplete = (data: Address) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    if (onComplete) onComplete(fullAddress);
  };

  const handleSearch = (data: Search) => {
    if (onSearch) onSearch(data);
  };

  const handleClose = (data: State) => {
    if (onClose) onClose(data);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalBoxStyle}>
        <PostCodeEmbed
          onComplete={handleComplete}
          onSearch={handleSearch}
          onClose={handleClose}
          defaultQuery={defaultQuery}
          options={postcodeTheme}
        />
      </Box>
    </Modal>
  );
}

export default PostCodeModal;

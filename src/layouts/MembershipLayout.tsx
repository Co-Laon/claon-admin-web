import NormalSelectBox from '@/components/common/selectbox/NormalSelectBox';
import { useRouter } from 'next/router';
import { useFindCenterNames } from '@/hooks/queries/center/useFindCenter';
import styled from '@emotion/styled';
import { SelectChangeEvent } from '@mui/material';
import { ReactElement, ReactNode, useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { currentCenterInfo } from '@/recoil/membership/atom';

const Container = styled.div`
  padding: 30px;
`;

const StyledSelectbox = styled(NormalSelectBox)`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  max-width: 353px;
  margin-bottom: 32px;
`;

function MembershipLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useFindCenterNames();
  const [centerInfo, setCenterInfo] = useRecoilState(currentCenterInfo);
  const onChangeSelectBox = useCallback(
    (e: SelectChangeEvent<unknown>, child: ReactNode) => {
      router.push(`/membership/${e.target.value}`);
    },
    [data]
  );

  useEffect(() => {
    if (id) {
      const centerName = data?.filter((d) => d.value === id);

      setCenterInfo({
        id: centerName ? centerName[0].value : '',
        name: centerName ? centerName[0].item : '',
      });
    }
  }, [id, data]);

  return (
    <Container>
      <StyledSelectbox
        items={data || []}
        onChange={onChangeSelectBox}
        value={id || '암장 선택'}
        placeholder="암장 선택"
      />
      {children}
    </Container>
  );
}

export default MembershipLayout;

import AddIcon from '@/assets/AddIcon';
import DeleteWhiteIcon from '@/assets/DeleteWhiteIcon';
import styled from '@emotion/styled';
import { Checkbox } from '@mui/material';
import React from 'react';
import { ChangeEvent, useCallback, useState } from 'react';
import {
  FieldValues,
  UseFormRegister,
  UseFormUnregister,
} from 'react-hook-form';

/*-------------------Types--------------- */
interface ListFormProps {
  title: string;
  items: JSX.Element;
  register: UseFormRegister<FieldValues>;
  formName: string;
  unregister: UseFormUnregister<FieldValues>;
}

interface ItemType {
  items: JSX.Element;
  id: number;
}

/*--------------------Styles--------------- */
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1;
`;

const StyledTitle = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StyledLi = styled.li`
  list-style-type: none;
`;

const StyledIconButton = styled.div<{ buttonType: 'delete' | 'add' }>`
  border-radius: 100%;
  background-color: ${({ buttonType }) =>
    buttonType === 'delete' ? '#B3261E' : '#D0BCFF'};
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #fffbfe;
    cursor: pointer;
  }
`;

const StyledCheckbox = styled(Checkbox)`
  color: #b3261e !important;
`;

const ItemWrapper = styled.div`
  display: flex;
`;

/**
 * register 화면에서 + 버튼을 누르면 새로운 폼이 생성되는 컴포넌트
 * @param param0
 * @returns
 */
function ListForm({
  title,
  items,
  register,
  formName,
  unregister,
}: ListFormProps) {
  //checkbox 클릭 한 리스트 담아두는 state
  const [checked, setChecked] = useState<number[]>([]);
  //전체 컴포넌트 리스트
  const [itemList, setItemList] = useState<ItemType[]>([
    { items: items, id: 0 },
  ]);
  //index 생성
  const [lastKey, setLastKey] = useState<number>(1);

  //Add Button클릭시
  const onClickAdd = useCallback(() => {
    setItemList([...itemList, { items: items, id: lastKey }]);
    setLastKey(lastKey + 1);
  }, [itemList, lastKey]);

  //Checkbox 변경시
  const onChangeCheckbox = useCallback(
    (e: ChangeEvent<HTMLInputElement>, idx: number) => {
      if (e.target.checked) setChecked([...checked, idx]);
      else {
        const nChecked = checked.filter((c) => c != idx);
        setChecked([...nChecked]);
      }
    },
    [checked, setChecked]
  );

  //Remove 버튼 클릭시
  const onClickRemove = useCallback(() => {
    setChecked([]);
    const nItemList = itemList.filter((item, idx) => !checked.includes(idx));
    checked.forEach((id) => {
      unregister(`${formName}.item_${id}`);
    });
    setItemList(nItemList);
  }, [itemList, checked]);

  return (
    <div>
      <TitleWrapper>
        <StyledTitle>{title}</StyledTitle>
        <StyledIconButton buttonType={checked.length === 0 ? 'add' : 'delete'}>
          {checked.length === 0 ? (
            <AddIcon onClick={onClickAdd} width={24} height={24} />
          ) : (
            <DeleteWhiteIcon onClick={onClickRemove} />
          )}
        </StyledIconButton>
      </TitleWrapper>
      <StyledUl>
        {itemList.map((item, idx) => (
          <StyledLi key={idx}>
            <ItemWrapper key={idx}>
              <StyledCheckbox
                onChange={(e) => onChangeCheckbox(e, idx)}
                checked={checked.includes(idx)}
              />

              {React.cloneElement(item.items, {
                register: register,
                cName: formName,
                idx: `item_${item.id}`,
                key: item.id,
              })}
            </ItemWrapper>
          </StyledLi>
        ))}
      </StyledUl>
    </div>
  );
}
export default ListForm;

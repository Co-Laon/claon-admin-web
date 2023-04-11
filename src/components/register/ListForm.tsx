import AddIcon from '@/assets/AddIcon';
import DeleteWhiteIcon from '@/assets/DeleteWhiteIcon';
import styled from '@emotion/styled';
import { v4 as uuid4 } from 'uuid';
import { Checkbox } from '@mui/material';
import {
  ChangeEvent,
  cloneElement,
  useCallback,
  useMemo,
  useState,
} from 'react';
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormUnregister,
} from 'react-hook-form';

// -------------------Types---------------
interface ListFormProps {
  title: string | JSX.Element;
  items: JSX.Element;
  register: UseFormRegister<FieldValues>;
  formName: string;
  unregister: UseFormUnregister<FieldValues>;
  error?: FieldErrors<FieldValues>;
}

interface ItemType {
  items: JSX.Element;
  id: number;
}

// --------------------Styles---------------
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
  margin-top: 12px;
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
  error,
}: ListFormProps) {
  //  title 부분에 다른 컴포넌트를 넣을 수 있도록 처리
  const titleComponent =
    typeof title === 'string' ? <StyledTitle>{title}</StyledTitle> : title;
  //  checkbox 클릭 한 리스트 담아두는 state
  const [checked, setChecked] = useState<number[]>([]);
  //  전체 컴포넌트 리스트
  const [itemList, setItemList] = useState<ItemType[]>([{ items, id: 0 }]);
  //  index 생성
  const [lastKey, setLastKey] = useState<number>(1);

  //  Add Button클릭시
  const onClickAdd = useCallback(() => {
    setItemList([...itemList, { items, id: lastKey }]);
    setLastKey(lastKey + 1);
  }, [itemList, lastKey, items]);

  //  Checkbox 변경시
  const onChangeCheckbox = useCallback(
    (e: ChangeEvent<HTMLInputElement>, idx: number) => {
      if (e.target.checked) setChecked([...checked, idx]);
      else {
        const nChecked = checked.filter((c) => c !== idx);
        setChecked([...nChecked]);
      }
    },
    [checked]
  );

  const errors = useMemo(() => {
    if (error) {
      if (error[formName]) return error[formName];
    }
    return undefined;
  }, [error, formName]);

  //  Remove 버튼 클릭시
  const onClickRemove = useCallback(() => {
    setChecked([]);
    const nItemList = itemList.filter((item, idx) => !checked.includes(idx));
    checked.forEach((id) => {
      unregister(`${formName}.item_${id}`);
    });
    setItemList(nItemList);
  }, [itemList, checked, formName, unregister]);

  return (
    <div>
      <TitleWrapper>
        {titleComponent}
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
          <StyledLi key={uuid4()}>
            <ItemWrapper key={uuid4()}>
              <StyledCheckbox
                onChange={(e) => onChangeCheckbox(e, idx)}
                checked={checked.includes(idx)}
              />

              {cloneElement(item.items, {
                register,
                formKey: formName,
                idx: `${item.id}`,
                key: item.id,
                error: errors,
              })}
            </ItemWrapper>
          </StyledLi>
        ))}
      </StyledUl>
    </div>
  );
}
export default ListForm;

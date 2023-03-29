import React, { useEffect, useRef, useState } from 'react';
import { DaumPostcodeEmbedProps } from 'react-daum-postcode';
import loadPostcode, {
  PostcodeConstructor,
  PostcodeOptions,
  postcodeScriptUrl,
} from 'react-daum-postcode/lib/loadPostcode';

/**
 * TODO: React 에서 autoClose 옵션을 사용할 수 없는 이슈가 있음
 * autoClose 를 통한다면, 내부 ref 를 통해 직접 DOM 을 제거하는 ref.current.remove() 를 호출하는데,
 * 이게 현재 React 에서는 동작하지 않음
 */
interface PostcodeEmbedProps extends Omit<DaumPostcodeEmbedProps, 'autoClose'> {
  options?: PostcodeOptions;
}

const defaultErrorMessage = (
  <p>
    현재 Daum 우편번호 서비스를 이용할 수 없습니다. 잠시 후 다시 시도해주세요.
  </p>
);

const defaultStyle = {
  fontSize: '1rem',
  width: '100%',
  height: 480,
};

/**
 * TODO: Error 관련 처리 추가 적용 필요
 */
function PostCodeEmbed({
  onComplete,
  onClose,
  onSearch,
  className,
  style,
  defaultQuery,
  errorMessage = defaultErrorMessage,
  scriptUrl = postcodeScriptUrl,
  options,
}: PostcodeEmbedProps) {
  const wrap = useRef<HTMLDivElement>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    loadPostcode(scriptUrl)
      .then((Postcode: PostcodeConstructor) => {
        if (!wrap.current) return;
        const postcode = new Postcode({
          ...options,
          oncomplete: (address) => {
            if (onComplete) onComplete(address);
          },
          onsearch: onSearch,
          width: '100%',
          height: '100%',
          onclose: onClose,
        });

        postcode.embed(wrap.current, { q: defaultQuery });
      })
      .catch((e: unknown) => {
        setHasError(true);
      });
  }, [scriptUrl, options, onComplete, onSearch, onClose, defaultQuery]);

  return (
    <div ref={wrap} className={className} style={{ ...defaultStyle, ...style }}>
      {hasError && errorMessage}
    </div>
  );
}

export default PostCodeEmbed;

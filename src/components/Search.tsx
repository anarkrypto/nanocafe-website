import React from 'react';
import { css } from '@emotion/css';
import { useForm } from 'react-hook-form';
import isNanoAddress from 'nano-address-validator';
import { FaSearch } from 'react-icons/fa';
import { useRouter } from 'next/router';

const search = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  border-right: 1px solid var(--primary-border);
  pointer-events: none;
  margin-left: -3rem;
  border-radius: 8px;

  @media (max-width: 1024px) {
    position: absolute;
    left: 0.5rem;
    top: 0.5rem;
    width: calc(100% - 1rem);
  }

  @media (max-width: 600px) {
    margin-left: 0;
  }

  @media (max-width: 540px) {
    width: calc(100% - 3.5rem);
  }

  button {
    position: absolute;
    padding: 0.75rem;
    right: 4rem;
    top: 0.85rem;
    z-index: 1002;
    color: var(--primary);
    pointer-events: all;

    @media (max-width: 1024px) {
      top: 0.5rem;
      right: 1rem;
    }

    @media (max-width: 600px) {
      top: 0.5rem;
      right: 0rem;
    }
  }

  input {
    pointer-events: all;
    background: var(--header);
    border: 1px solid var(--primary-border);
    border-right: 1px solid transparent;
    padding: 0.65rem;
    font-family: var(--font-mono);
    font-size: 0.9rem;
    min-width: 65ch;
    transform: translateX(55%);
    transition: transform 0.1s;
    z-index: 1001;
    border-radius: 8px;

    @media (max-width: 1024px) {
      min-width: 2ch;
      width: 100%;
      padding: 1rem;
    }

    &.invalid {
      color: var(--red);
    }

    &::placeholder {
      color: var(--primary);
      font-family: var(--font);
      font-size: 0.8rem;
    }

    &:focus, &:hover {
      transform: translateX(0);
      outline: none;
    }
  }
`;

interface Form {
  search: string;
}

function isHex(str: string): boolean {
  return /^[A-F0-9]+$/i.test(str)
}

export const Search: React.FC = () => {

  const router = useRouter();

  const { register, handleSubmit, formState: { errors, isValid } } = useForm<Form>({
    defaultValues: {
      search: '',
    },
  });

  const onSubmit = (values: Form) => {
    router.push(`/account/${values.search}`);
  }

  return <form className={search} onSubmit={handleSubmit(onSubmit)}>
    <input
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck="false"
      className={[ errors.search ? 'invalid' : '',  ].join(' ')}
      type="text"
      placeholder="Search Address/Block"
      { ...register(
        'search',
        { 
          validate(value) {
            return isNanoAddress(value, ['nano', 'xrb']) || (isHex(value) && value.length === 64);
          }
        }
      )}/>
    <button>
      <FaSearch/>
    </button>
  </form>;
};

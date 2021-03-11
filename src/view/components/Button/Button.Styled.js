import styled from 'styled-components';

const Types = {
    Primary: {
        COLOR: '#fff',
        BACKGROUND_COLOR: '#18f',
        BORDER: '',
    },
    Secondary: {
        COLOR: '#333',
        BACKGROUND_COLOR: '#ddd',
        BORDER: '',
    },
    Disabled: {
        COLOR: '#aaa',
        BACKGROUND_COLOR: '',
        BORDER: '',
    }
}

const Size = {
    Large: {
        HEIGHT: 48,
        FONT_SIZE: 16,
        PADDING: '0 30px',
    },
    Medium: {
        HEIGHT: 42,
        FONT_SIZE: 14,
        PADDING: '0 20px',
    },
    Small: {
        HEIGHT: 32,
        FONT_SIZE: 12,
        PADDING: '0 10px',
    },
}

const Default = {
    BACKGROUND_COLOR: '#fff',
    COLOR: '#333',
    BORDER_RADIUS: 4,
    TRANSITION: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
    ...Size.Medium
}

export const ButtonGroup = styled.div`
  position: relative;
  z-index: 100;
  display: flex;
  justify-content: center;

  ${props => props.reverse && `
        flex-flow: row-reverse;
    `};

  ${props => props.left && `
        justify-content: flex-start;
    `};

  ${props => props.right && `
        justify-content: flex-end;
    `};

  ${props => props.gutter && `
        > * {
            margin-left: ${props.gutter}px;
        }
        > *:first-child {
            margin-left: 0;
        }
    `};
`;

export const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${Default.HEIGHT}px;
  padding: ${Default.PADDING};
  font-size: ${Default.FONT_SIZE}px;
  color: ${Default.COLOR};
  background-color: ${Default.BACKGROUND_COLOR};
  background-image: none;
  line-height: normal;
  white-space: nowrap;
  text-align: center;
  cursor: pointer;
  user-select: none;
  font-weight: bold;
  border: 1px solid transparent;
  border-radius: ${Default.BORDER_RADIUS};
  transition: ${Default.TRANSITION};

  &:focus {
    outline: 0;
  }

  ${props => props.sort === 'primary' && `
        background-color: ${Types.Primary.BACKGROUND_COLOR};
        color: ${props.disabled ? Types.Disabled.COLOR : Types.Primary.COLOR};
    `};

  ${props => props.sort === 'secondary' && `
        background-color: ${Types.Secondary.BACKGROUND_COLOR};
        color: ${props.disabled ? Types.Disabled.COLOR : Types.Secondary.COLOR};
    `};

  ${props => props.full && `
        width: 100%;
    `};

  ${props => props.size === 'large' && `
        height: ${Size.Large.HEIGHT}px;
        padding: ${Size.Large.PADDING};
        font-size: ${Size.Large.FONT_SIZE}px;
    `};

  ${props => props.size === 'small' && `
        height: ${Size.Small.HEIGHT}px;
        padding: ${Size.Small.PADDING};
        font-size: ${Size.Small.FONT_SIZE}px;
    `};

  ${props => props.disabled && `
        cursor: not-allowed; 
    `};

  ${props => props.icon && `
        img {
            margin-right: 8px;        
        }
    `};
`;

export const Buttons = styled.div`
  display: flex;
`

export const Btn = styled.button`
  display: flex;
  height: 32px;
  padding: 0 11px;
  font-size: 14px;
  line-height: 30px;
  color: #767676;
  background-color: hsla(0, 0%, 100%, .9);
  border: 1px solid transparent;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  text-align: center;
  user-select: none;
  cursor: pointer;
  outline: 0;

  svg {
    position: relative;
    top: -1px;
    width: 15px;
    fill: #767676;
  }
  
  span {
    margin-left: 6px;
  }

  & + button {
    margin-left: 8px;
  }
`
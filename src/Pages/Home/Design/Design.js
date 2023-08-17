import React from "react";
import {
  H1,
  Wrapper,
  Text,
  Block,
  BlockName,
  H3,
  Line,
  ItemWrapper,
  Item,
  SubItem,
  H4,
  Button,
} from "../Design/Design.styled";
import bag from "../../../Assets/img-mainpage/bag.svg"
import img1 from "../../../Assets/img-mainpage/living-room-1.svg";
import img2 from "../../../Assets/img-mainpage/living-room-2.svg";
import img3 from "../../../Assets/img-mainpage/living-room-3.svg";
import img4 from "../../../Assets/img-mainpage/children-1.svg";
import img5 from "../../../Assets/img-mainpage/children-3.svg";
import img6 from "../../../Assets/img-mainpage/children-3.svg";
import img7 from "../../../Assets/img-mainpage/corridors-1.svg";
import img8 from "../../../Assets/img-mainpage/corridors-2.svg";
import img9 from "../../../Assets/img-mainpage/corridors-3.svg";

export default function Design() {
  return (
    <Wrapper>
      <H1>Дизайн комнат</H1>
      <Text>
        Выбирая дизайн комнаты, вы получаете смету со списком всех предметов в
        интерьере, названиями, артикулами, цветом стен и так далее.
      </Text>
      <Block>
        <BlockName>
          <H3>Гостиные</H3>
          <Line></Line>
        </BlockName>
        <ItemWrapper>
          <Item>
            <img src={img1} alt="img" />
            <SubItem>
              <H4>Акварель</H4>
              <Button>
              <img src={bag} alt="img" />
                Выбрать
              </Button>
            </SubItem>
          </Item>

          <Item>
            <img src={img2} alt="img" />
            <SubItem>
              <H4>Ира</H4>
              <Button>
              <img src={bag} alt="img" />
                Выбрать
              </Button>
            </SubItem>
          </Item>

          <Item>
            <img src={img3} alt="img" />
            <SubItem>
              <H4>Нурс</H4>
              <Button>
              <img src={bag} alt="img" />
                Выбрать
              </Button>
            </SubItem>
          </Item>
        </ItemWrapper>
      </Block>

      <Block>
        <BlockName>
          <H3>Детские</H3>
          <Line></Line>
        </BlockName>
        <ItemWrapper>
          <Item>
            <img src={img4} alt="img" />
            <SubItem>
              <H4>Синяя</H4>
              <Button>
              <img src={bag} alt="img" />
                Выбрать
              </Button>
            </SubItem>
          </Item>

          <Item>
            <img src={img5} alt="img" />
            <SubItem>
              <H4>Розовая</H4>
              <Button>
              <img src={bag} alt="img" />
                Выбрать
              </Button>
            </SubItem>
          </Item>

          <Item>
            <img src={img6} alt="img" />
            <SubItem>
              <H4>Яркая</H4>
              <Button>
              <img src={bag} alt="img" />
                Выбрать
              </Button>
            </SubItem>
          </Item>
        </ItemWrapper>
      </Block>

      <Block>
        <BlockName>
          <H3>Коридоры - прихожие</H3>
          <Line></Line>
        </BlockName>
        <ItemWrapper>
          <Item>
            <img src={img7} alt="img" />
            <SubItem>
              <H4>Ирина</H4>
              <Button>
              <img src={bag} alt="img" />
                Выбрать
              </Button>
            </SubItem>
          </Item>

          <Item>
            <img src={img8} alt="img" />
            <SubItem>
              <H4>Акварель</H4>
              <Button>
              <img src={bag} alt="img" />
                Выбрать
              </Button>
            </SubItem>
          </Item>

          <Item>
            <img src={img9} alt="img" />
            <SubItem>
              <H4>Кадыр</H4>
              <Button>
              <img src={bag} alt="img" />
                Выбрать
              </Button>
            </SubItem>
          </Item>
        </ItemWrapper>
      </Block>
    </Wrapper>
  );
}

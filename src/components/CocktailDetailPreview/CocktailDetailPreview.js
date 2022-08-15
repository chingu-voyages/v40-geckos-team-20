import React from 'react';
import { Wrapper, Header, CocktailName, CocktailImage, Ingredients, IngredientsTitle, IngredientsContent, IngredientsItem, RecipeDetailsBtn } from './CocktailDetailPreview.styled';

const CocktailDetailPreview = () => {
  return (
    <Wrapper>
      <Header>
        <CocktailName>Sazerac</CocktailName>
        <CocktailImage src="https://s3-alpha-sig.figma.com/img/a0df/6fa6/27cdad593483001ab7c7c85db8a5aef1?Expires=1661731200&Signature=Vkq6nABk53WM-qzdcg7mQ-QcakbqjxCxM4GJncBQpQzR8SkR8V~8C-SA6aQlK2f54ZCAXsXVJ~roilG1oeRMdRcgbmTvXNeNYMMoJKqsfuzeX2ki7LZBRrJ3A0WrD7MDs-sub2SIKKnYkK3v0d3G8Vxjjw0HTxQ-6ztqPGJNv6TcRGsQsKbTIU1HRd907B~GBZ203oGDwEaEh5MEPIHzdqJ1W0JhEKuNtoTYFH7aR1-qkG6hCxEEdgdEtATlfZ20miyAhMUDaP7Ju~vv0Mu1f75-qXmc6y7hIdXameHYkGZtE5sKrbNbBgE~bwr0PfEw8BE6jQf9zSEbHb~ndEOthw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="A glass of Sazerac" />
      </Header>
      <Ingredients>
        <IngredientsTitle>Ingredients</IngredientsTitle>
        <IngredientsContent>
          <IngredientsItem>
            2 ounces of rye bourbon
          </IngredientsItem>
          <IngredientsItem>
            1/4 ounce simple syrup
          </IngredientsItem>
          <IngredientsItem>
            2 dashes angusta bitters
          </IngredientsItem>
          <IngredientsItem>
            Orange peel for garnish
          </IngredientsItem>
        </IngredientsContent>
      </Ingredients>
      <RecipeDetailsBtn>
        Recipe Details
      </RecipeDetailsBtn>
    </Wrapper>
  );
};

export default CocktailDetailPreview;
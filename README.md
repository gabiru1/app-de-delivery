# Entregáveis

<details>
  <summary>
    <strong>🤷🏽‍♀️ Como entregar</strong>
  </summary><br>

  - **Cada grupo terá uma branch específica** no formato `main-group-X`. Ex: `main-group-1`; `main-group-2`; etc;

  - **Para entregar o seu projeto você deverá criar um `Pull Request` base neste repositório no formato `[MAIN GROUP X] [BASE]`**. Seu `Pull Request` deve apontar da branch `main-group-X` para a branch `main` (que será sua PR principal) e deve agregar todo o trabalho do seu grupo para avaliação no final do desenvolvimento;

  - **Cada feature/fix/etc deve ser desenvolvida em uma nova branch**, cujo formato preferencialmente deve ser `main-group-X-<alteração>-<especificação>`. Ex: `main-group-1-feat-login-form`. Isso ajudará tanto o seu time quanto a equipe de instrução a localizar seus trabalhos no projeto;

  - **No término do projeto, cada feature/fix/etc deve ser mergeada _(preferencialmente via PR, com code review e aprovação de todo o grupo)_ com a branch principal do grupo**, onde ocorrerá a avaliação. Ex: `main-group-1-feat-login-form` deve ser mergeado com `main-group-1`;

  - **Cada PR deve, preferencialmente, ter o título no formato `[MAIN GROUP X] [CONTEXTO] [ALTERAÇÃO] [DESCRIÇÃO]`**. Ex: `[MAIN GROUP 1] [API] [FEAT] [LOGIN]`; `[MAIN GROUP 1] [FRONT] [FEAT] [LOGIN-FORM]`; etc. Isso ajudará tanto o seu time quanto a equipe de instrução a localizar seus trabalhos no projeto.

  > Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/course/4d67f5b4-34a6-489f-a205-b6c7dc50fc16/) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!

</details>

<details>
  <summary>
    <strong>👨‍💻 O que deverá ser desenvolvido</strong>
  </summary><br>

  Esse será o seu projeto mais completo até agora! Nessa aplicação, seu grupo será responsável por criar e integrar tanto o back-end quanto o front-end, criando uma plataforma de delivery de cerveja. 🍻

  O projeto não é só codar, mas também é trabalhar em equipe, aprender e se divertir muito! 

  **Neste projeto, seu grupo deve desenvolver um app de delivery para uma distribuidora de bebidas. Veja abaixo o contexto da entrega que deve ser feita:**

  A distribuidora de cervejas da dona Tereza está se informatizando! 🚀 Seu negócio, antes focado em um local específico da cidade, passou a receber uma quantidade massiva de encomendas de outros pontos, expandindo sua atuação via delivery. Isso tudo graças ao excelente preço das bebidas e atendimento da equipe de vendas.

  Agora a distribuidora possui alguns pontos de venda na cidade para agilizar no atendimento dessas áreas. Cada ponto de venda, por sua vez, possui uma pessoa vendedora responsável.

  Como seu antigo sistema, que era um conjunto de planilhas, já não atende a necessidade do negócio por gerar muita manutenção, dona Tereza procurou a sua equipe de pessoas desenvolvedoras com uma ideia de aplicativo que pudesse agilizar a vida de sua equipe e das pessoas que compram seus produtos. O aplicativo precisa:

  - Ter acesso via login: tanto clientes como pessoas vendedoras, assim como a própria dona Tereza, que administra o sistema, devem ter acesso ao aplicativo via login, porém para funções diferentes: (1) A pessoa cliente, que compra da lista de produtos; (2) A pessoa vendedora, que aprova, prepara e entrega; (3) A pessoa administradora, que gerencia quem usa o aplicativo;
  - Fazer a comunicação entre clientes e pessoas vendedoras: a pessoa cliente faz o pedido via "carrinho de compras" e a pessoa vendedora aprova, prepara e envia esse pedido. Quando o produto é recebido por quem comprou, essa pessoa marca o pedido como "recebido". Ambos devem possuir detalhes sobre seus pedidos;
  - Se a pessoa cliente faz o pedido, o mesmo deve aparecer para a pessoa vendedora em seu dash de pedidos após a atualização da página. A pessoa cliente, por sua vez, deve ter as informações sobre seu pedido quando sua página for atualizada, ou seja, ter informações se o pedido está sendo preparado ou se já saiu pra entrega;

  Sua equipe, que já possui uma boa experiência com desenvolvimento, em pouco tempo apresentou um [protótipo](https://www.figma.com/file/cNKu41RhnPIgNqrbMTzmUI/Delivery-App-new-trybeer?node-id=0%3A1) e um [Diagrama de ER](./assets/readme/eer.png) conforme imagem:

  ![Diagrama de ER](./assets/readme/eer.png)

  A ideia da sua equipe já pressupõe alguma escalabilidade, dado que foram estabelecidas algumas entidades genéricas no banco de dados e componentização no front-end, para que, caso o sistema cresça, não seja muito difícil mudar e ampliar essa estrutura.

  **A proposta encantou, mas dona Tereza quer ver o negócio em ação! Ela está disposta a pagar por um MVP do projeto e vocês fecharam o negócio com um prazo combinado para entrega.**

  Agora é mãos à obra! Vamos começar?

</details>

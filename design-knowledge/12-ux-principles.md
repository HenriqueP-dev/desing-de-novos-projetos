# 12 — Princípios de UX aplicados

As heurísticas são regras de inspeção, não substituem pesquisa com usuários. As dez heurísticas de Nielsen são [princípios gerais de avaliação](https://www.nngroup.com/articles/ten-usability-heuristics/). A relação com as referências abaixo é aplicação analítica, não uma certificação de que os sites foram desenhados a partir delas.

## Heurísticas de Nielsen com aplicação concreta

| Heurística | Aplicação em interface real | Relação com as referências |
|---|---|---|
| 1. Visibilidade do estado do sistema | após submit, mostrar enviando/sucesso/erro; marcar navegação atual; refletir `aria-expanded`; atualizar progresso de tarefa | Terra scroll spy e menu; NØEMA progress bar/status; Hanzo status tab |
| 2. Correspondência com mundo real | usar rótulos conhecidos e sequência de tarefa familiar; explicar jargão de serviço | Hanzo organiza processo→work→pricing; em produto, usar vocabulário do usuário |
| 3. Controle e liberdade | oferecer fechar, cancelar, voltar, desfazer; Escape em overlay; preservar scroll | NØEMA menu fecha com Escape; pricing e consent devem permitir rever escolha |
| 4. Consistência e padrões | mesmo CTA, spacing, cor de ação, ícone e regra de fechamento em toda aplicação | cada referência é internamente consistente; não misturar seus estilos entre si |
| 5. Prevenção de erros | confirmar ação destrutiva; validação inline antes de submit; restrições visíveis e input types apropriados | nenhum fluxo completo de erro foi verificado; recomendar prevenção para forms futuros |
| 6. Reconhecimento em vez de memorização | exibir opções, labels, contexto, estado selecionado e plano atual | Hanzo pricing/tags; Elicyon consent tabs; Terra package cards |
| 7. Flexibilidade e eficiência | atalhos para recorrentes, navegação clara, preservar preferências; não adicionar atalhos sem necessidade | sticky nav/anchors são úteis em páginas longas |
| 8. Estética e design minimalista | remover informação decorativa que compete com ação; manter uma hierarquia de destaque | Elicyon usa espaço negativo; Terra deve limitar camadas de shadow/bloom; NØEMA separar experiência imersiva da leitura |
| 9. Ajudar a reconhecer/diagnosticar/recuperar de erro | erro específico, foco no primeiro campo, corrigir sem perder dados, instrução de recuperação | não há estados de erro completos nos snapshots; lacuna explícita |
| 10. Ajuda e documentação | ajuda contextual, explicação junto do termo difícil, contato encontrável | FAQs/contact em Hanzo/Terra; manter respostas junto à tarefa, não esconder em páginas genéricas |

## Hierarquia da informação e arquitetura

1. Identificar público, tarefa primária e decisão que a tela deve apoiar.
2. Agrupar itens por modelo mental do usuário; rótulos internos/marketing não devem obscurecer o nome da tarefa.
3. Ordenar informação: contexto curto → decisão/conteúdo principal → ação → detalhe/ajuda.
4. Usar heading semântico e navegação que indique onde se está. Elicyon usa narrativa de portfolio; Hanzo sequencia a oferta; NØEMA usa capítulos; Terra organiza conversão. Não transplantar a IA entre produtos sem validar.
5. Validar estrutura por tree test/card sort quando taxonomia for grande; em fluxos críticos, testar protótipo com tarefas concretas.

## Affordance e feedback

- Links navegam; buttons executam ações; elementos clicáveis devem ter hit area, foco e estado pressionado.
- Hover é feedback adicional, nunca prova única de clicabilidade. Cursor customizado é secundário.
- Ação deve dar resposta no mesmo contexto: inline success, progress, undo, confirmação ou mensagem de erro acionável.
- Estado selecionado precisa de mais de cor: check/icon/texto/shape ou atributo semântico.
- Carga longa pede progresso honesto; carga curta pode não precisar de spinner que pisca.

## Carga cognitiva e prevenção de erros

- Limitar decisões concorrentes; separar escolha complexa em passos somente quando os passos esclarecem tarefa.
- Mostrar preço, requisito e consequência ao lado da escolha; resumir input antes de envio irreversível.
- Usar defaults seguros, preservar dados após erro, aceitar autofill e validar no blur/submit sem interromper digitação a cada tecla.
- Empty state deve explicar por que está vazio, que ação pode preencher e qual ação principal; não inventar resultados.
- Error state deve dizer o que aconteceu e o próximo passo, sem depender só de vermelho.
- Loading state deve evitar clique repetido e anunciar status para tecnologia assistiva.

## Método de avaliação heurística

Para cada tela, executar as tarefas principais com teclado e pointer; anotar problema, usuário/tarefa afetada, severidade 0–4, evidência, princípio violado, solução e custo. Priorizar frequência × impacto × dificuldade de recuperação. Depois validar em teste de usabilidade, observando conclusão, erros, hesitação e feedback do usuário. A revisão heurística não prova satisfação ou acessibilidade.

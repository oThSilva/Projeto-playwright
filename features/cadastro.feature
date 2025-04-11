Feature: Cadastro de entregador no Buger Eats
  Como um usuário
  Desejo me cadastrar como entregador
  Para trabalhar com entregas no Buger Eats

  Scenario: TC 01 - Register a user on the Buger Eats website
    Given that the user is on the Burger Eats page
    When all fields are filled in correctly
    Then the registration is successful
import React, { Component, ReactNode } from "react";
import { Button, FlatList, Image, ListRenderItem, ListRenderItemInfo, ScrollView, StyleSheet, Text, TextInput, View, } from "react-native";

/*  

! Aula 01 - Primeiro App
export default class App extends Component {
  render(): React.ReactNode {
    let nome: string = "Pedro";

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Olá {nome} !</Text>
        <Logo width={50} height={50} name="React Native" />
        <Count count={0} />
      </View>
    );
  }
}
! Fim da Aula 01

! Aula 02 - Componentes e Props
interface LogoProps {
  width: number;
  height: number;
  name?: string;
}
class Logo extends Component<LogoProps> {
  render(): ReactNode {
    let img = "https://reactnative.dev/img/tiny_logo.png";
    return (
      <View style={styles.content}>
        <Image
          source={{ uri: img }}
          style={{ width: this.props.width, height: this.props.height, marginTop: 20 }}
        />
        <Text style={{ color: "#f0f0f0" }}>{this.props.name}</Text>
      </View>
    )
  }
}
! Fim da Aula 02

! Aula 03 - State
interface CountProps {
  count: number;
}
interface CountState {
  count: number;
}
class Count extends Component<CountProps, CountState> {
  constructor(props: any) {
    super(props);
    this.state = { count: this.props.count }

    TODO: Isso é necessário para que o método incrementar tenha acesso ao this
    this.incrementar = this.incrementar.bind(this);
    this.decrementar =  this.decrementar.bind(this);
  }

   incrementar() {
    TODO: Não podemos alterar o state diretamente, por isso usamos o setState
    this.setState({ count: this.state.count + 1 }); 
  }

  decrementar(){
    this.setState({count: this.state.count -1 })
  }
  render(): ReactNode {
    return (
      <View style={styles.content}>
        <Text style={styles.text}>{this.state.count}</Text>
        <Button  title="Incrementar" onPress={this.incrementar} />
        <Button title="Decrementar" onPress={this.decrementar}/>
      </View>
    )

  }
}

! Fim da Aula 03

! Aula 04 - Aplicando Agrupamento de Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#18181b",
    marginTop: 40
  },
  text: {
    color: "#f0f0f0",
    fontSize: 20
  },
  content: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    gap: 10
  },
  button:{
    borderColor: "#f0f0f0",
    borderWidth: 1,
    borderRadius: 10,
    padding: 16,
    color: "#f0f0f0"

  }
})
! Fim da Aula 04

! Aula 05  Tamanhos dinâmicos e fixos
! Aula 06 - Flexbox e alinhamento
  Estilização de componentes
 export default class App extends Component {
   render(): ReactNode {
     return (
       <View style={styles.container}>
         <View style={styles.box1}></View>
         <View style={styles.box2}></View>
         <View style={styles.box3}></View>
       </View>
     );
   }
 

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: "#18181b",
     marginTop: 40
   },
   box1: {
     height: 65,
   },
   box2: {
     flex: 1,
     backgroundColor: "#FFF",
   },
   box3: {
     height: 65,
   }
 }
 
  const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: "#18181b",
     marginTop: 40,
     flexDirection: "row",
     justifyContent: "space-around",
     alignItems: "center",
     gap: 16
   },
   box1: {
     width: 50,
     height: 50,
     backgroundColor: "#f0f0f0"
   },
   box2: {
     width: 50,
     height: 50,
     backgroundColor: "#f0f0f0"
   },
   box3: {
     width: 50,
     height: 50,
     backgroundColor: "#f0f0f0"
   }
  })

! Fim da Aula 05 e Aula 06

! Aula 07 e Aula 08 - Recebendo dados e Trabalhando com botões
interface AppState {
  nome: string;
  input: string;
}

export default class App extends Component<any, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      nome: "",
      input: ""
    }
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChangeText(text: string) {
    this.setState({ input: text });
  }

  handleClick() { 
    if(this.state.input.length === 0){
      alert("Digite um nome");
      return;
    }
    this.setState({ nome: this.state.input });
  }


  render(): ReactNode {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.text_title}>Digite seu nome:</Text>
          <TextInput placeholder="Digite seu nome" style={styles.input} onChangeText={this.handleChangeText} />
          <Button title="Entrar" onPress={this.handleClick}/>
          {
            this.state.nome.length > 0 && <Text style={styles.text_title}>Olá {this.state.nome} !</Text>
          }

        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#18181b",
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  form: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    width: "100%"

  },
  text_title: {
    color: "#f0f0f0",
    fontSize: 20,
    textAlign: "center"
  },
  input: {
    width: "80%",
    backgroundColor: "#f0f0f0",
    borderWidth: 1,
    borderRadius: 10,
    padding: 16,
  }
})
! Fim da Aula 07 e Aula 08  

! Aula 09 - ScrollView
export default class App extends Component {
  render(): ReactNode {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
          <View style={styles.box4}></View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#18181b",
    marginTop: 40,
  },
  box1: {
    height: 250,
    backgroundColor: "red"
  }
  ,
  box2: {
    height: 250,
    backgroundColor: "blue"
  },
  box3: {
    height: 250,
    backgroundColor: "green"
  },
  box4: {
    height: 250,
    backgroundColor: "yellow"
  }
})
! Fim da Aula 09

! Aula 10 - FlatList
interface AppState {
  feed: { id: number, nome: string, idade: number, email: string }[];

}
export default class App extends Component<any, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      feed: [
        {
          id: 1,
          nome: "Pedro",
          idade: 20,
          email: "pedro@mail.com"
        },
        {
          id: 2,
          nome: "Ana",
          idade: 25,
          email: "ana@mail.com"
        },
        {
          id: 3,
          nome: "Maria",
          idade: 30,
          email: "maria@mail.com"
        },
        {
          id: 4,
          nome: "João",
          idade: 35,
          email: "joao@mail.com"
        },
        {
          id: 5,
          nome: "Luiz",
          idade: 20,
          email: "luiz@mail.com"
        },
        {
          id: 6,
          nome: "Roberta",
          idade: 20,
          email: "roberta@mail.com"
        },
        {
          id: 7,
          nome: "Ricardo",
          idade: 20,
          email: "ricardo@mail.com"
        },
        {
          id: 8,
          nome: "Paulo",
          idade: 20,
          email: "paulo@mail.com"
        },
        {
          id: 9,
          nome: "Lucas",
          idade: 20,
          email: "lucas@mail.com"
        }


      ]
    }

  }
  render(): ReactNode {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.feed}
          renderItem={(item) => <Pessoa data={item} />}
        />
      </View>

    )
  }
}
interface PessoaProps {
  data: ListRenderItemInfo<{ id: number, nome: string, idade: number, email: string }>;
}
class Pessoa extends Component<PessoaProps> {
  constructor(props: any) {
    super(props);
  }
  render(): ReactNode {
    return (
      <View>
        <View style={styles.card}>
          <Text>Nome: {this.props.data.item.nome} </Text>
          <Text>Idade: {this.props.data.item.idade} </Text>
          <Text>Email: {this.props.data.item.email} </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#18181b",
    marginTop: 40,
  },

  card: {
    backgroundColor: "#f0f0f0",
    padding: 16,
    borderRadius: 10,
    margin: 12

  }
})
! Fim da Aula 10
*/
export default class App extends Component {
  render(): ReactNode {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Menu Pizzas</Text>
        <Text style={styles.text}>Você escolheu: Pizza de calabresa</Text>
        <Text style={styles.text}>R$ 59,59</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#18181b",
    marginTop: 40,
  },
  title:{
    color: "#f0f0f0",
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold"
  },
  text:{
    color: "#f0f0f0",
    fontSize: 20,
    textAlign: "center",
    marginTop: 16
  }

})


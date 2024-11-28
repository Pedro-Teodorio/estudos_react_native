import React, { Component, ReactNode } from "react";
import { Button, FlatList, Image, ListRenderItem, ListRenderItemInfo, Pressable, ScrollView, StyleSheet, Switch, Text, TextInput, View, } from "react-native";
import { Picker } from '@react-native-picker/picker';
import Slider from "@react-native-community/slider";
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

! Aula 11 - Picker
interface AppState {
  pizzaIndex: number;
  pizzas: {id: number, nome: string, preco: number}[];
}
export default class App extends Component<any,AppState> {
  constructor(props: any) {
    super(props);
    this.state ={
      pizzaIndex: 0,
      pizzas:[
        {id: 1, nome: "Calabresa", preco: 59.59},
        {id: 2, nome: "Marguerita", preco: 45.59},
        {id: 3, nome: "Portuguesa", preco: 80.99},
        {id: 4, nome: "Frango com Catupiry", preco: 69.59},
        {id: 5, nome: "Quatro Queijos", preco: 39.39}
      ]
    }
  }
  render(): ReactNode {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Menu Pizzas</Text>

        <Picker 
            style={styles.picker}
            selectedValue={this.state.pizzaIndex}
            onValueChange={(itemValue, _itemIndex) => this.setState({pizzaIndex: itemValue})}
        >
          {
            this.state.pizzas.map((pizza,index) => {
              return <Picker.Item key={index} label={pizza.nome} value={index} />
            })
          }
        </Picker>
        
        <Text style={styles.text}>Você escolheu: {this.state.pizzas[this.state.pizzaIndex].nome}</Text>
        <Text style={styles.text}>R$ {this.state.pizzas[this.state.pizzaIndex].preco}</Text>
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
  title: {
    color: "#f0f0f0",
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold"
  },
  text: {
    color: "#f0f0f0",
    fontSize: 20,
    textAlign: "center",
    marginTop: 16
  },
  picker: {
    width: "90%",
    backgroundColor: "#3f3f46",
    color: "#f0f0f0",
    padding: 4,
    borderRadius: 20,
    margin: 16
  }


})
! Fim da Aula 11

! Aula 12 - Slider
interface AppState {
  value: number;
}
export default class App extends Component<any,AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: 0
    }
  }
  render(): ReactNode {
    return (
      <View style={styles.container} >
        <Slider
          minimumValue={0}
          maximumValue={100}
          value={this.state.value}
          onValueChange={(value) => this.setState({value})}
          minimumTrackTintColor="#f0f0f0"
          maximumTrackTintColor="#3f3f46"
        />
        <Text style={styles.text}>{this.state.value.toFixed(0)}</Text>
      </View>
    )
  }
}
! Fim da Aula 12

! Aula 13 - Switch
interface AppState {
  value: boolean;
}
export default class App extends Component<any, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: false
    }
  }

  render(): ReactNode {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Hello World</Text>
        <Switch
          value={this.state.value}
          onValueChange={(value) => this.setState({value})}
          thumbColor={this.state.value ? "#f0f0f0" : "#3f3f46"}
          trackColor={{true: "#3f3f46", false: "#f0f0f0"}}
        />

        <Text style={styles.text}>{this.state.value ? "Ligado" : "Desligado"}</Text>
      </View>
    )
  }
}
! Fim da Aula 13
*/

interface AppState {
  nome: string;
  idade: string;
  sexo: { id: number, nome: string }[],
  sexoIndex: number;
  valueSlider: number;
  valueSwitch: boolean;
}
export default class App extends Component<any, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      nome: "",
      idade: "",
      sexo: [
        { id: 1, nome: "Masculino" },
        { id: 2, nome: "Feminino" },
      ],
      sexoIndex: 0,
      valueSlider: 0,
      valueSwitch: false
    }
    this.handleSubmit= this.handleSubmit.bind(this);
  }

  handleSubmit(){
    const { nome, idade, valueSlider } = this.state;

    if (!nome || !idade || valueSlider === 0) {
      alert("Preencha todos os campos corretamente");
      return;
    }
    alert(`Nome: ${this.state.nome} 
          \nIdade: ${this.state.idade} 
          \nSexo: ${this.state.sexo[this.state.sexoIndex].nome} 
          \nValor: ${this.state.valueSlider} 
          \nEstudante: ${this.state.valueSwitch ? "Sim" : "Não"}`
    )
  }
  render(): ReactNode {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Cadastro</Text>
        <TextInput
          placeholder="Digite seu nome"
          placeholderTextColor="#f4f4f5"
          style={styles.input}
          onChangeText={(text) => this.setState({ nome: text })}
          value={this.state.nome}
        />
        <TextInput
          placeholder="Digite sua idade"
          placeholderTextColor="#f4f4f5"
          style={styles.input}
          onChangeText={(text) => this.setState({ idade: text })}
          value={this.state.idade.toString()}
        />
        <Picker
          selectedValue={this.state.sexoIndex}
          style={styles.picker}
          onValueChange={(itemValue, _itemIndex) => this.setState({ sexoIndex: itemValue })}
          dropdownIconColor={"#f4f4f5"}
        >

          {
            this.state.sexo.map((sexo, index) => {
              return <Picker.Item key={index} label={sexo.nome} value={index} />
            })
          }
        </Picker>
          <View style={styles.sliderContent}>
          <Text style={styles.sliderText}>Limite: {this.state.valueSlider.toFixed(0)}</Text>
                <Slider
                minimumValue={0}
                maximumValue={2000}
                value={this.state.valueSlider}
                onValueChange={(value) => this.setState({ valueSlider: value })}
                minimumTrackTintColor="#f0f0f0"
                maximumTrackTintColor="#3f3f46"
                thumbTintColor="#f0f0f0"
              />
              
          </View>
      

        <View style={styles.switchContent}>
          <Text style={styles.switchText}>Estudante</Text>
          <Switch
            value={this.state.valueSwitch}
            onValueChange={(value) => this.setState({ valueSwitch: value })}
            thumbColor={this.state.valueSwitch ? "#f0f0f0" : "#3f3f46"}
            trackColor={{ true: "#3f3f46", false: "#f0f0f0" }}
          />
        </View>
          <Pressable style={styles.button} 
          onPress={this.handleSubmit}>
            <Text style={styles.switchText}>Cadastrar</Text>
          </Pressable>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#18181b",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,

  },
  title: {
    color: "#f0f0f0",
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold"
  },
  text: {
    color: "#f0f0f0",
    fontSize: 20,
    textAlign: "center",
    marginTop: 16
  },
  input: {
    width: "90%",
    height: 52,
    backgroundColor: "#3f3f46",
    color: "#f0f0f0",
    padding: 16,
    borderRadius: 20,
    margin: 16,
  },
  picker: {
    width: "90%",
    backgroundColor: "#3f3f46",
    color: "#f0f0f0",
    borderRadius: 20,
    margin: 16
  },
  sliderContent: {
    flex: 0,
    width: "90%",
    flexDirection: "column",
    justifyContent: "center",

  },
  sliderText: {
    color: "#f0f0f0",
    fontSize: 16,
  },

  switchContent: {

    borderRadius: 20,
    flex: 0,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  switchText: {
    color: "#f0f0f0",
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#3f3f46",
    padding: 16,
    borderRadius: 20,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16
  }



})

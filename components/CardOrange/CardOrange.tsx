import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"

type IITCardProps = {
	
	title: string
	description: string
    image: string
	button:string

}

export const IITCard: React.FC<IITCardProps> = (props) => {
	const { title, description, image,button  } = props

	return (
		<View  style ={{borderWidth: 1,
			
			borderRadius: 30,
			borderColor:"#A13B28",
			backgroundColor:"#FF8040",
			width:750,
			height:280}}>
			<h1>
				
			<Text style={styles.title}>{title}</Text>
			
			</h1>
			{/* <Button title={buttonText} onPress={onButtonPress} color={colorButton}></Button> */}
			<Text style={styles.description}>{description}</Text>
			<Text style={styles.button}>{button}</Text>
             
			<Image style={{ width: 200, height: 200,borderRadius:100,marginTop:-180,marginLeft:50 }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6jPh408BqxSqQP3YrXDZKdFyJbrEvxlkeAQ&usqp=CAU' }} />
			
		</View>
	)
}

const styles = StyleSheet.create({
	title: {
		fontSize: 70,
		color:"white",
		textAlign: "center",
		marginLeft:300,
		
		
		
	},
	image:{
		flex: 1, justifyContent: 'center' ,
		width: 100, height: 500 ,
		borderRadius:100,
		marginTop:100,

	},
	description:{
		fontSize: 32,	
		marginLeft:300

	}
	,
	button:{
		fontSize: 32,
		marginLeft:300,
		color:"black",
		borderWidth: 1,
			
			borderRadius: 30,
			borderColor:"#A13B28",
			backgroundColor:"white",
			width:300,
			height:280
	},
	sheet:{
		height:250,
		width:50,
		border :1,

	}

})
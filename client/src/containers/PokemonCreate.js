import React from "react";
import { useEffect , useState, useMemo} from "react";
import { Link, useNavigate } from 'react-router-dom';
import { pokemonCreate, getType} from '../redux/actions/index'
import {useDispatch, useSelector} from 'react-redux';


const numberValidation=(number)=> (number < 1 || number > 1000)? true : false


const entValidation=(number)=> (number % 1 !== 0)? true : false


const wordValidation = (name) => {
    let regularExp = new RegExp(/^[A-Z]+$/i);
    return regularExp.test(name);
};

const imgValidation = (name) => {
    let regularExp = new RegExp(/(http[s]?:\/\/.*\.(?:png|jpg|gif|svg|jpeg))/i);
    return regularExp.test(name);
};


const validate=(input)=>{
    let error = {};

    if(!input.name) error.name = 'Ingrese un nombre'
    if(input.name && !wordValidation(input.name)) error.name = "Solo letras. No puede usar espacios, numeros o caracteres especiales(@#%)"
    if(input.name.length > 15) error.name = 'Debe contener entre 1 a 15 letras'
    
    if (input.img && !imgValidation(input.img)) error.img = 'Ingrese un link valido a una imagen'
    
    if (numberValidation(input.hp)) error.hp = 'Ingrese un numero de 1 a 1000'
    if (entValidation(input.hp)) error.hp = 'Ingrese un numero entero'
    

    if (numberValidation(input.attack)) error.attack = 'Ingrese un numero de 1 a 1000'     
    if (entValidation(input.attack)) error.attack = 'Ingrese un numero entero'
     

    if (numberValidation(input.defense)) error.defense = 'Ingrese un numero de 1 a 1000'
    if (entValidation(input.defense)) error.defense = 'Ingrese un numero entero'
     

    if (numberValidation(input.speed)) error.speed = 'Ingrese un numero de 1 a 1000'
    if (entValidation(input.speed)) error.speed = 'Ingrese un numero entero'
         
 
    if (numberValidation(input.height))error.height = 'Ingrese un numero de 1 a 1000'
    if (entValidation(input.height))error.height = 'Ingrese un numero entero'
    
    if (numberValidation(input.weight))error.weight = 'Ingrese un numero de 1 a 1000'
    if (entValidation(input.weight))error.weight = 'Ingrese un numero entero'
     
    
    return error;

}




export default function PokemonCreate() {

	const dispatch = useDispatch()
	const navigate = useNavigate();

	const typs = useSelector((state) => state.typePokemon)
	const [errors,setErrors] = useState({});

	const [input, setInput] = useState({
		name: "",
		img: "",
		hp: 1,
		attack: 1,
		defense: 1,
		speed: 1,
		height: 1,
		weight: 1,
		tipos: []
	})

	function handleChange(e){
		setInput({
			...input,
			[e.target.name] : e.target.value
		})
		setErrors(validate({
			...input,
			[e.target.name] : e.target.value
		}))
		console.log(input)
	}

	function handleSelect(e) {
		setInput({
			...input,
			tipos: [...input.tipos, e.target.value]
		})
		console.log(input)	
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log(input);
	    if (Object.keys(errors).length === 0){
			dispatch(pokemonCreate(input))
			alert('Pokemon creado correctamente')
			setInput({
				name: "",
				img: "",
				hp: 1,
				attack: 1,
				defense: 1,
				speed: 1,
				height: 1,
				weight: 1,
				tipos: []		
			})
			navigate('/pokemons')
		}
		else {
      		alert("Por favor, complete correctamente su pokemon");
    	}		
	}


const disableSubmit = ()=> (input.name.length > 0 && input.tipos.length >= 1)? false:true




	function handleDelete(e) {
		setInput({
			...input,
			tipos: input.tipos.filter(occ => occ !== e)
		})
	}

	useEffect(()=>{
		dispatch(getType())
	}, [])









	return (
		<div>
			<Link to='/'><button>Volver</button></Link>
			<h1>Crea tu poke</h1>
			<form onSubmit={(e)=>handleSubmit(e)} id='form'>
				<div>
					<label>Name:</label>
					<input 
					type="text" 
					value={input.name}
					name="name" 
					onChange={(e)=>handleChange(e)}
					/>
					{errors.name && (<p>{errors.name}</p>)}

				</div>

				<div>
					<label>Imagen:</label>
					<input 
					type="text" 
					value={input.img}
					name="img" 
					onChange={(e)=>handleChange(e)}					
					/>
					{errors.img && (<p>{errors.img}</p>)}

				</div>

				<div>
					<label>hp:</label>
					<input 
					type="number" 
					value={input.hp}
					name="hp" 
					onChange={(e)=>handleChange(e)}					
					/>
					{errors.hp && (<p>{errors.hp}</p>)}
				</div>

				<div>
					<label>attack:</label>
					<input 
					type="number" 
					value={input.attack}
					name="attack" 
					onChange={(e)=>handleChange(e)}					
					/>
					{errors.attack && (<p>{errors.attack}</p>)}
				</div>

				<div>
					<label>defense:</label>
					<input 
					type="number" 
					value={input.defense}
					name="defense" 
					onChange={(e)=>handleChange(e)}					
					/>
					{errors.defense && (<p>{errors.defense}</p>)}
				</div>

				<div>
					<label>speed:</label>
					<input 
					type="number" 
					value={input.speed}
					name="speed" 
					onChange={(e)=>handleChange(e)}					
					/>
					{errors.speed && (<p>{errors.speed}</p>)}
				</div>

				<div>
					<label>height:</label>
					<input 
					type="number" 
					value={input.height}
					name="height" 
					onChange={(e)=>handleChange(e)}					
					/>
					{errors.height && (<p>{errors.height}</p>)}
				</div>

				<div>
					<label>weight:</label>
					<input 
					type="number" 
					value={input.weight}
					name="weight" 
					onChange={(e)=>handleChange(e)}					
					/>
					{errors.weight && (<p>{errors.weight}</p>)}
				</div>

				<div>
					<label>Tipos:</label>
          			<select onChange={(e)=>handleSelect(e)}>
            		<option disabled value='Tipo poke'>Tipo poke</option>
    				{
        			typs.map((el) => (
        			    <option key={el.id} value={el.name}>{el.name}</option>
        			))
        			}
    				</select>
					
				</div>
				<button type="submit" disabled={disableSubmit()}>Crear</button>


			</form>
			{input.tipos.map(el =>
				<div>
					<p>{el}</p>
					<button onClick={()=> handleDelete(el)}>X</button>
				</div>)
			}
		</div>
	)


}
















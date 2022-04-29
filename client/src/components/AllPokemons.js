import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCharacters } from '../redux/actions/index'
import Pokemon from '../components/Pokemon'



export default function AllPokemons() {
	const dispatch = useDispatch();


	const [pages, setPages] = useState(0);

	useEffect(()=>{
		dispatch(getCharacters(pages));
	}, [dispatch, pages]);

	const allCharacters = useSelector((state) => state.characters);

	const handleClick = (e) => {
		e.preventDefault();
		dispatch(getCharacters(pages))
	}

	const prev = (e) => {
		e.preventDefault();
		if (pages <= 0) {
			setPages(0);
		} else {
			setPages(pages - 12);
		}
	};


	const next = (e) => {
		e.preventDefault();
		if (allCharacters.length < 12) {
			return;
		} else {
			setPages(pages + 12);
		}
	};


    return(
        <div> 
        	{allCharacters?.map((c) => {
				return (
					<>
						<Pokemon name={c.name} img={c.img} key={c.ide}/>
					</>
				)
			})}


			<button
				onClick={(e) => {
					prev(e);
				}}
				disabled={pages <=0}
			>
				{"<--Prev"}
			</button>
			<button
				onClick={(e) => {
					next(e);
				}}
				disabled={allCharacters.length < 12}
			>
			{"Next-->"}
			</button>

        </div>
    )
};


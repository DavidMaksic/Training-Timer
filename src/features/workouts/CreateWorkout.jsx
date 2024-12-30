import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetState, addWorkoutToState } from '../workouts/workoutSlice';

import BackButton from '../../components/BackButton';
import Inputs from '../../components/Inputs';
import MainButton from '../../components/MainButton';
import PresetInput from '../../components/PresetInput';

function CreateWorkout() {
   const [searchEmpty, setSearchEmpty] = useState(false);
   const btnEl = useRef(null);

   const dispatch = useDispatch();
   const { name, sets, work, rest } = useSelector((store) => store.workouts);

   const handleCreateWorkout = function () {
      const workout = {
         name,
         sets,
         work,
         rest,
         id: Date.now(),
      };

      // - If name input is empty
      if (!name) return setSearchEmpty(true);

      dispatch(addWorkoutToState(workout));
      dispatch(resetState());
   };

   // - Disable button and show error message if input is empty when button is clicked
   useEffect(() => {
      if (searchEmpty) {
         const btnElement = btnEl.current;
         btnElement.classList.add('failed-save');
         btnElement.classList.add('hover:failed-save-hover');

         const i = setTimeout(() => {
            btnElement.classList.remove('failed-save');
            btnElement.classList.remove('hover:failed-save-hover');

            setSearchEmpty(false);
         }, 3000);

         return function () {
            clearTimeout(i);
         };
      }
   }, [searchEmpty]);

   return (
      <form className="flex flex-col gap-10 sm:gap-6">
         <BackButton setPath="/" styles="self-end px-5 pt-2 sm:pt-4" />
         <PresetInput width="w-2/5 sm:w-1/2" inputBgColor="bg-neutral-200 " />
         <Inputs />
         <MainButton
            setPath={name && `/presets`}
            handler={handleCreateWorkout}
            element={btnEl}
            styles="text-5xl sm:text-[2.8rem] p-8 sm:p-6 mt-6"
         >
            {!searchEmpty ? '+ Save workout' : 'No name found!'}
         </MainButton>
      </form>
   );
}

export default CreateWorkout;
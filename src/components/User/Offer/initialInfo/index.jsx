import { DEFAULT_VALUE } from '../../../../constants'

export function InitialInfo ({ offer }) {
  return (
    <>
      <h2 className='text-[#2c2a2e] font-bold text-2xl '>Puesto:                  <span className='text-[#82838c]'>{offer?.title}                                        </span></h2>
      <h2 className='text-[#2c2a2e] font-bold text-2xl pt-3'>Informacion de puesto:</h2>
      <h4 className='text-base text-[#2c2a2e] text-1xl font-semibold py-[2px]'>Tipo de contrato:        <span className='text-[#82838c]'>{offer?.contractType?.value || DEFAULT_VALUE}         </span></h4>
      <h4 className='text-base text-[#2c2a2e] text-1xl font-semibold py-[2px]'>Teletrabajo:             <span className='text-[#82838c]'>{offer?.teleworking?.value || DEFAULT_VALUE}          </span></h4>
      <h4 className='text-base text-[#2c2a2e] text-1xl font-semibold py-[2px]'>Salario:                 <span className='text-[#82838c]'>{offer?.salaryDescription || DEFAULT_VALUE}           </span></h4>
      <h4 className='text-base text-[#2c2a2e] text-1xl font-semibold py-[2px]'>Nivel:                   <span className='text-[#82838c]'>{offer?.jobLevel?.value}                              </span></h4>
      <h4 className='text-base text-[#2c2a2e] text-1xl font-semibold py-[2px]'>Jornada:                 <span className='text-[#82838c]'>{offer?.journey.value || DEFAULT_VALUE}               </span></h4>
      <h4 className='text-base text-[#2c2a2e] text-1xl font-semibold py-[2px]'>Numeros de trabajadores: <span className='text-[#82838c]'>{offer?.profile?.numberWorkers || DEFAULT_VALUE}      </span></h4>
      <h4 className='text-base text-[#2c2a2e] text-1xl font-semibold py-[2px]'>Industria:               <span className='text-[#82838c]'>{offer?.profile?.typeIndustry?.value || DEFAULT_VALUE}</span></h4>
      <h4 className='text-base text-[#2c2a2e] text-1xl font-semibold py-[2px]'>Vacantes:                <span className='text-[#82838c]'>{offer?.vacancies || DEFAULT_VALUE}                   </span></h4>
      <h4 className='text-base text-[#2c2a2e] text-1xl font-semibold py-[2px]'>Experiencia minima:      <span className='text-[#82838c]'>{offer?.experienceMin.value || DEFAULT_VALUE}         </span></h4>
      <h4 className='text-base text-[#2c2a2e] text-1xl font-semibold py-[2px]'>Estudios minimos:        <span className='text-[#82838c]'>{offer?.studiesMin.value || DEFAULT_VALUE}            </span></h4>
      <h4 className='text-base text-[#2c2a2e] text-1xl font-semibold py-[2px]'>Numeros de trabajadores: <span className='text-[#82838c]'>{offer?.profile.numberWorkers || DEFAULT_VALUE}       </span></h4>
      <h4 className='text-base text-[#2c2a2e] text-1xl font-semibold py-[2px]'>Direccion:               <span className='text-[#82838c]'>{offer?.fiscalAddress || DEFAULT_VALUE}               </span></h4>
    </>
  )
}

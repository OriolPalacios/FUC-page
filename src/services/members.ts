import api from "../utils/api";
import type { Members } from "@customTypes/members";

export async function getMembers() {
  try {
    const response = await api.get(import.meta.env.MIEMBROS_V1_DEFAULT_VIEW + '/records')
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getMembersJuntaDirectiva(): Promise<Members[]> {
  try {
    const response = await api.get(import.meta.env.MIEMBROS_V1_DEFAULT_VIEW + '/records', {
      params: {
        where: `(Area,eq,Junta Directiva)`,
        fields: 'Nombre,Apellido,Cargo,Area,Telefono,Contacto,Foto'
      }
    });
    return response.data.list as Members[];
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}

export async function getMembersSecretaries(): Promise<Members[]> {
  try {
    const response = await api.get(import.meta.env.MIEMBROS_V1_DEFAULT_VIEW + '/records', {
      params: {
        where: `(Area,neq,Junta Directiva)`,
        fields: 'Nombre,Apellido,Cargo,Area,Telefono,Contacto,Foto',
        limit: 100
      }
    });
    return response.data.list as Members[];
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}

export async function getMembersBySecretary(secretary:string){
  try {
    const response = await api.get(import.meta.env.MIEMBROS_V1_DEFAULT_VIEW + '/records', {
      params: {
        where: `(Area,eq,${secretary})`,
        fields: 'Nombre,Apellido,Cargo,Area,Telefono,Contacto,Foto'
      }
    });
    return response.data.list as Members[];
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}
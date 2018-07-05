import api from '@services/api'

export default{
	register (credentials){
		return api().posts('register',credentials)
	}
}
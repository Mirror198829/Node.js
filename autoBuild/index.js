/**Created by Caojing on 2018/9/11
** Edited on 2018/9/11
**/

var projectData = {
	'name':'qianduan',
	'fileData':[
		{
			'name':'css',
			'type':'dir'
		},
		{
			'name':'js',
			'type':'dir'
		},
		{
			'name':'index.html',
			'type':'file',
			'content':'<html>1232131</html>'
		}
	]
}
var fs = require('fs')

if(projectData.name){
	fs.mkdir(projectData.name)
	var fileData = projectData.fileData
	if (fileData && fileData.forEach) {
		fileData.forEach(f=>{
			f.path = `${projectData.name}/${f.name}`
			f.content = f.content || ''
			switch(f.type){
				case 'dir':
					fs.mkdirSync(f.path)
					break;
				case 'file':
					fs.writeFileSync(f.path,f.content)
					break;
				default:
					break;
			}
		})
	}
}
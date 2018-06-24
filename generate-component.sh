#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

printf "Enter component name [example-component]: "
read name

if [ -a ./src/components/$name ]; then
  printf "Component "$name" already exists\n"
else
  parselcase_name=$(printf $name | perl -pe "s/(^|-)./uc($&)/ge;s/-//g")
  mkdir ./src/components/$name &&

  printf "Create container file? [y/n]: "
  read container

  type=component

  printf "Generating "$name" component file\n"
  (
    printf "import React from 'react';\n"
    printf "// import styles from './"$name".module.scss';\n"
    printf "\n"
    printf "export default class "$parselcase_name" extends React.Component {\n"
    printf "  render () {\n"
    printf "    return (\n"
    printf "      <h1>"$name"!</h1>\n"
    printf "    );\n"
    printf "  }\n"
    printf "}\n"
  ) > ./src/components/$name/$name.component.jsx


  if printf "$container" | grep -iq "^y" ; then
    printf "Generating "$name" container file\n"
    type=container
    (
      printf "import { connect } from 'react-redux';\n"
      printf "import "$parselcase_name" from './"$name".component';\n"
      printf "\n"
      printf "function mapState () {\n"
      printf "  return {\n"
      printf "  };\n"
      printf "}\n"
      printf "\n"
      printf "export default connect(mapState)("$parselcase_name");\n"
    ) > ./src/components/$name/$name.container.jsx
  fi

  printf "Creating "$name" stylesheet\n";
  touch ./src/components/$name/$name.module.scss &&

  printf "Creating "$name" test\n";
  (
    printf "import React from 'react';\n"
    printf "import { shallow } from 'enzyme';\n"
    printf "import "$parselcase_name" from './"$name".component';\n"
    printf "\n"
    printf "describe('$parselcase_name', () => {\n"
    printf "  it('renders', () => {\n"
    printf "    const component = shallow(<"$parselcase_name" />);\n"
    printf "    expect(false).toEqual(true);\n"
    printf "  });\n"
    printf "});\n"
  ) > ./src/components/$name/$name.test.js &&

  printf "Creating "$name" index\n";
  (
    printf "import "$parselcase_name" from './"$name".$type';\n"
    printf "\n"
    printf "export default "$parselcase_name";\n"
  ) > ./src/components/$name/index.js

  printf "\n🎉\tComponent generated!\t🎉\n"
fi

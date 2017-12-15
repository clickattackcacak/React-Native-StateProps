/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Parent from './src/component/Parent';

export default class App extends Component {

  aaa() {
    let url = 'http://www.cduppy.com/salescms/?a=ajax&do=getContent&projectId=3&token=1234567890';

    fetch(url)
    .then(res => res.json())
    .then(res => {
      /*let a = res.pages.filter(p => {
        if(p.files)
         p.files.map(f => {
           if(Number(f.size) > 1867436 && f.type == 'image' && p.templateId == '3')
            console.log(p);
          })
          
      })*/
      let b = res.menus[1].menu.map(m => {
        let fL = 0;
        let t = '';
        res.pages.map(p => {
          if(m.menuId == p.menuId && p.files)
            fL += p.files.length;
            t = m.title;
        })
        return {menuId: m.menuId, files: fL, title: t}
      })
      b.map(c => {
        if(c.files > 10)
          console.log(c);
      })
      //console.log(b);
    })
  }

  componentWillMount() {
    this.aaa();
  }

  render() {
    return (



      <View style={styles.container}>

        <View>
          <Text>AAAAAAA</Text>
        </View>

        <Parent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
});

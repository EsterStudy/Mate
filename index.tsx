import React from "react";
import { View, ScrollView, Text, Image, ImageBackground, StyleSheet, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default (props) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<ScrollView 
					horizontal
					showsHorizontalScrollIndicator={false} style={styles.scrollView2}>
					<View style={styles.view}>
						<Text style={styles.text}>
							{"10:00"}
						</Text>
					</View>
					<View style={styles.view2}>
						<Text style={styles.text}>
							{"10:00"}
						</Text>
					</View>
				</ScrollView>
				<View style={styles.row}>
					<View style={styles.row2}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03594a2a-5ae9-4798-b8d7-1ad00b899974"}} 
							resizeMode = {"stretch"}
							style={styles.image}
						/>
						<Text style={styles.text2}>
							{"Лента челленджей"}
						</Text>
					</View>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c37e18c0-6c8d-4a53-8f57-9cfd79544915"}} 
						resizeMode = {"stretch"}
						style={styles.image2}
					/>
				</View>
				<View style={styles.row3}>
					<View style={styles.column}>
						<ImageBackground 
							source={{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/990f1f99-06c8-4b30-a8aa-f2618b93006f"}} 
							resizeMode = {'stretch'}
							style={styles.view3}
							>
							<View style={styles.view4}>
								<Text style={styles.text3}>
									{"Glow up"}
								</Text>
							</View>
						</ImageBackground>
						<View style={styles.absoluteColumn}>
							<Text style={styles.text4}>
								{"«Адская неделя» — перезагрузи себя за 7 дней!"}
							</Text>
							<View style={styles.row4}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eeff496a-90bd-4ee9-a4a0-be951c04681c"}} 
									resizeMode = {"stretch"}
									style={styles.image3}
								/>
								<View >
									<Text style={styles.text5}>
										{"Елена Комарова"}
									</Text>
									<Text style={styles.text6}>
										{"18 нояб 2025"}
									</Text>
								</View>
							</View>
						</View>
					</View>
					<View style={styles.column2}>
						<ImageBackground 
							source={{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3920140a-a378-4867-84f3-ec8ec743a553"}} 
							resizeMode = {'stretch'}
							style={styles.view3}
							>
							<View style={styles.view4}>
								<Text style={styles.text3}>
									{"Glow up"}
								</Text>
							</View>
						</ImageBackground>
						<View style={styles.absoluteColumn}>
							<Text style={styles.text7}>
								{"«Год осознанной жизни» Вопрос самому себе."}
							</Text>
							<View style={styles.row4}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/50025cde-c80d-44b0-8ba0-6285ff668798"}} 
									resizeMode = {"stretch"}
									style={styles.image3}
								/>
								<View >
									<Text style={styles.text5}>
										{"Елена Тулейко"}
									</Text>
									<Text style={styles.text8}>
										{"17 нояб 2025"}
									</Text>
								</View>
							</View>
						</View>
					</View>
				</View>
				<View style={styles.row3}>
					<View style={styles.column}>
						<ImageBackground 
							source={{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e4c6f9a-02b1-4926-ab59-db9ef8432f3e"}} 
							resizeMode = {'stretch'}
							style={styles.view5}
							>
							<View style={styles.view4}>
								<Text style={styles.text3}>
									{"Похудение"}
								</Text>
							</View>
						</ImageBackground>
						<View style={styles.absoluteColumn2}>
							<Text style={styles.text9}>
								{"Рельефная фигура без вреда: сушка тела под контролем"}
							</Text>
							<View style={styles.row5}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5dff9b37-7aba-46ef-9c5b-585326181b9e"}} 
									resizeMode = {"stretch"}
									style={styles.image3}
								/>
								<View style={styles.column3}>
									<Text style={styles.text5}>
										{"Наталья Поленова"}
									</Text>
									<Text style={styles.text10}>
										{"17 нояб 2025"}
									</Text>
								</View>
								<View style={styles.box}>
								</View>
							</View>
						</View>
					</View>
					<View style={styles.column2}>
						<ImageBackground 
							source={{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e4d80755-44d8-4e07-a3c8-556ae020bf65"}} 
							resizeMode = {'stretch'}
							style={styles.view5}
							>
							<View style={styles.view4}>
								<Text style={styles.text3}>
									{"Здоровье"}
								</Text>
							</View>
						</ImageBackground>
						<View style={styles.absoluteColumn3}>
							<Text style={styles.text11}>
								{"Здоровый сон — залог всестороннего успеха!"}
							</Text>
							<View style={styles.row6}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/504dca0a-2a95-45ec-a5e6-c6c258e45a6a"}} 
									resizeMode = {"stretch"}
									style={styles.image3}
								/>
								<View >
									<Text style={styles.text5}>
										{"Анастасия Сукманова"}
									</Text>
									<Text style={styles.text12}>
										{"17 нояб 2025"}
									</Text>
								</View>
							</View>
						</View>
					</View>
				</View>
				<View style={styles.row7}>
					<View style={styles.column4}>
						<ImageBackground 
							source={{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/401d9007-0063-4331-961f-6bc6d2dacecc"}} 
							resizeMode = {'stretch'}
							style={styles.view6}
							>
							<View style={styles.view7}>
								<Text style={styles.text3}>
									{"Саморазвитие"}
								</Text>
							</View>
						</ImageBackground>
						<View style={styles.absoluteColumn4}>
							<Text style={styles.text13}>
								{"75 Hard Challenge: что это такое и стоит ли пробовать?"}
							</Text>
							<View style={styles.row8}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3240801d-bb13-404c-b797-c223c2b6c0ca"}} 
									resizeMode = {"stretch"}
									style={styles.image4}
								/>
								<View style={styles.column5}>
									<Text style={styles.text5}>
										{"Людмила Заковряжная"}
									</Text>
									<Text style={styles.text10}>
										{"16 нояб 2025"}
									</Text>
								</View>
							</View>
						</View>
					</View>
					<View style={styles.column6}>
						<ImageBackground 
							source={{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dbdee982-c222-43d2-b817-58d4655e9496"}} 
							resizeMode = {'stretch'}
							style={styles.view6}
							>
							<View style={styles.view7}>
								<Text style={styles.text3}>
									{"Спорт"}
								</Text>
							</View>
						</ImageBackground>
						<View style={styles.absoluteColumn4}>
							<Text style={styles.text14}>
								{"Strava Challenge — прогресс за месяц пробежки...?"}
							</Text>
							<View style={styles.row8}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d11e0b0e-c935-4183-97ea-14f886f9751a"}} 
									resizeMode = {"stretch"}
									style={styles.image4}
								/>
								<View style={styles.column3}>
									<Text style={styles.text5}>
										{"Ольга Бекрицкая"}
									</Text>
									<Text style={styles.text10}>
										{"15 нояб 2025"}
									</Text>
								</View>
								<View style={styles.box2}>
								</View>
							</View>
						</View>
					</View>
				</View>
				<View style={styles.box3}>
				</View>
				<View style={styles.row3}>
					<View style={styles.column}>
						<ImageBackground 
							source={{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2ccedce2-c98c-4b89-8599-b4493127a604"}} 
							resizeMode = {'stretch'}
							style={styles.view3}
							>
							<View style={styles.view4}>
								<Text style={styles.text3}>
									{"Манифестация"}
								</Text>
							</View>
						</ImageBackground>
						<View style={styles.absoluteColumn}>
							<Text style={styles.text15}>
								{"Манифестируй свою жизнь —\nдобейся успеха за 21 день!"}
							</Text>
							<View style={styles.row4}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36a64547-2792-4978-83b1-69c519268cfd"}} 
									resizeMode = {"stretch"}
									style={styles.image3}
								/>
								<View >
									<Text style={styles.text5}>
										{"Катрин Форс"}
									</Text>
									<Text style={styles.text16}>
										{"14 нояб 2025"}
									</Text>
								</View>
							</View>
						</View>
					</View>
					<View style={styles.column2}>
						<ImageBackground 
							source={{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/21350aa9-454f-4322-ae87-a0281e98e3c0"}} 
							resizeMode = {'stretch'}
							style={styles.view3}
							>
							<View style={styles.view4}>
								<Text style={styles.text3}>
									{"Обучение"}
								</Text>
							</View>
						</ImageBackground>
						<View style={styles.absoluteColumn}>
							<Text style={styles.text17}>
								{"Невероятный прогресс в обучении всего за 30 дней!"}
							</Text>
							<View style={styles.row4}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/448f5ef7-318f-4e8e-90fd-819bc94ce004"}} 
									resizeMode = {"stretch"}
									style={styles.image3}
								/>
								<View >
									<Text style={styles.text5}>
										{"Полина Мельник"}
									</Text>
									<Text style={styles.text18}>
										{"14 нояб 2025"}
									</Text>
								</View>
							</View>
						</View>
					</View>
				</View>
				<View style={styles.row3}>
					<View style={styles.column}>
						<ImageBackground 
							source={{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/60f7f45d-cf0d-4138-9b1d-55d5411a2557"}} 
							resizeMode = {'stretch'}
							style={styles.view5}
							>
							<View style={styles.view4}>
								<Text style={styles.text3}>
									{"Красота"}
								</Text>
							</View>
						</ImageBackground>
						<View style={styles.absoluteColumn}>
							<Text style={styles.text19}>
								{"Красота всегда и везде!\n30-дневный челлендж"}
							</Text>
							<View style={styles.row4}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/71a4a97f-7da5-4447-8075-de2def44d48c"}} 
									resizeMode = {"stretch"}
									style={styles.image5}
								/>
								<View >
									<Text style={styles.text20}>
										{"Mate"}
									</Text>
									<Text style={styles.text10}>
										{"13 нояб 2025"}
									</Text>
								</View>
							</View>
						</View>
					</View>
					<View style={styles.column2}>
						<ImageBackground 
							source={{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/70d4ce58-3945-4897-800a-4f845e52b832"}} 
							resizeMode = {'stretch'}
							style={styles.view3}
							>
							<View style={styles.view8}>
								<Text style={styles.text3}>
									{"Привычки"}
								</Text>
							</View>
						</ImageBackground>
						<View style={styles.absoluteColumn}>
							<Text style={styles.text21}>
								{"30-дневный челлендж: Выработай новую привычку"}
							</Text>
							<View style={styles.row4}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/015cf495-630f-4b07-8cd8-9348d73e3ea3"}} 
									resizeMode = {"stretch"}
									style={styles.image3}
								/>
								<View >
									<Text style={styles.text5}>
										{"Елена Исупова"}
									</Text>
									<Text style={styles.text22}>
										{"13 нояб 2025"}
									</Text>
								</View>
							</View>
						</View>
					</View>
				</View>
				<View style={styles.row7}>
					<View style={styles.column4}>
						<ImageBackground 
							source={{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/81a74527-d262-4fc0-a5c6-8adc77b46b00"}} 
							resizeMode = {'stretch'}
							style={styles.view9}
							>
							<View style={styles.view10}>
								<Text style={styles.text3}>
									{"Психология"}
								</Text>
							</View>
						</ImageBackground>
						<View style={styles.absoluteColumn4}>
							<Text style={styles.text23}>
								{"Самонаблюдение — челлендж, который поможет..."}
							</Text>
							<View style={styles.row9}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a6c9864-ea75-4378-8ad6-a344a6426755"}} 
									resizeMode = {"stretch"}
									style={styles.image4}
								/>
								<View >
									<Text style={styles.text5}>
										{"Лиана Хазиахметова"}
									</Text>
									<Text style={styles.text24}>
										{"12 нояб 2025"}
									</Text>
								</View>
							</View>
						</View>
					</View>
					<View style={styles.column6}>
						<ImageBackground 
							source={{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/87cee949-6321-4a6a-bb48-8e6d5bb7f42b"}} 
							resizeMode = {'stretch'}
							style={styles.view9}
							>
							<View style={styles.view11}>
								<Text style={styles.text3}>
									{"Спорт"}
								</Text>
							</View>
						</ImageBackground>
						<View style={styles.absoluteColumn5}>
							<Text style={styles.text25}>
								{"Что такое йога-челлендж: в чём суть, кому подходит..."}
							</Text>
							<View style={styles.row8}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b7c43f87-4eea-4f8b-9340-2c6e66d42166"}} 
									resizeMode = {"stretch"}
									style={styles.image4}
								/>
								<View style={styles.column3}>
									<Text style={styles.text5}>
										{"Академия Йоги"}
									</Text>
									<Text style={styles.text10}>
										{"11 нояб 2025"}
									</Text>
								</View>
								<View style={styles.box2}>
								</View>
							</View>
						</View>
					</View>
				</View>
				<View style={styles.box4}>
				</View>
				<View style={styles.column7}>
					<ImageBackground 
						source={{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/53368121-3f84-4a80-983b-729a7eefd44d"}} 
						resizeMode = {'stretch'}
						style={styles.column8}
						>
						<View style={styles.row10}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b338356-81fa-4721-952a-6356cbf7803c"}} 
								resizeMode = {"stretch"}
								style={styles.image6}
							/>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/895f23fc-bbb2-47f0-8006-a8b3999d26f4"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<View style={styles.box5}>
							</View>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/da7079db-91e6-4efd-9e41-7140f7bda2ab"}} 
								resizeMode = {"stretch"}
								style={styles.image8}
							/>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/463447a0-15a1-40db-aa3a-3d960cb7f6ee"}} 
								resizeMode = {"stretch"}
								style={styles.image9}
							/>
						</View>
						<View style={styles.row11}>
							<Text style={styles.text26}>
								{"Главная"}
							</Text>
							<Text style={styles.text27}>
								{"Лента"}
							</Text>
							<View style={styles.box5}>
							</View>
							<Text style={styles.text28}>
								{"Челленджи"}
							</Text>
							<Text style={styles.text29}>
								{"Ещё"}
							</Text>
						</View>
						<View style={styles.view12}>
							<View style={styles.box6}>
							</View>
						</View>
					</ImageBackground>
					<View style={styles.absoluteView}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d2596ce-041d-4d63-a681-6c606517da73"}} 
							resizeMode = {"stretch"}
							style={styles.image10}
						/>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	absoluteColumn: {
		position: "absolute",
		bottom: 0,
		right: 0,
		left: 0,
		backgroundColor: "#FFFFFF",
		borderBottomRightRadius: 6,
		borderBottomLeftRadius: 6,
		paddingTop: 28,
	},
	absoluteColumn2: {
		position: "absolute",
		bottom: 0,
		right: 0,
		left: 0,
		backgroundColor: "#FFFFFF",
		borderBottomRightRadius: 6,
		borderBottomLeftRadius: 6,
		paddingTop: 28,
		paddingRight: 6,
	},
	absoluteColumn3: {
		position: "absolute",
		bottom: 0,
		right: 0,
		left: 0,
		backgroundColor: "#FFFFFF",
		borderBottomRightRadius: 6,
		borderBottomLeftRadius: 6,
		paddingTop: 28,
		paddingLeft: 6,
	},
	absoluteColumn4: {
		position: "absolute",
		bottom: 0,
		right: 0,
		left: 0,
		backgroundColor: "#FFFFFF",
		borderBottomRightRadius: 6,
		borderBottomLeftRadius: 6,
		paddingTop: 32,
		paddingRight: 8,
	},
	absoluteColumn5: {
		position: "absolute",
		bottom: 0,
		right: 0,
		left: 0,
		backgroundColor: "#FFFFFF",
		borderBottomRightRadius: 6,
		borderBottomLeftRadius: 6,
		paddingTop: 32,
		paddingRight: 19,
	},
	absoluteView: {
		position: "absolute",
		top: 0,
		right: 0,
		left: 0,
		alignItems: "center",
	},
	box: {
		width: 23,
		height: 23,
	},
	box2: {
		width: 30,
		height: 30,
	},
	box3: {
		height: 36,
		marginBottom: 20,
		marginHorizontal: 5,
	},
	box4: {
		height: 36,
		marginBottom: 16,
		marginHorizontal: 5,
	},
	box5: {
		flex: 1,
	},
	box6: {
		width: 139,
		height: 5,
		backgroundColor: "#FFFFFF",
		borderRadius: 100,
	},
	column: {
		flex: 1,
		paddingBottom: 70,
		marginRight: 3,
	},
	column2: {
		flex: 1,
		paddingBottom: 70,
	},
	column3: {
		flex: 1,
		marginRight: 8,
	},
	column4: {
		flex: 1,
		paddingBottom: 76,
		marginRight: 3,
	},
	column5: {
		flex: 1,
	},
	column6: {
		flex: 1,
		paddingBottom: 76,
	},
	column7: {
		paddingTop: 24,
	},
	column8: {
		paddingVertical: 9,
	},
	image: {
		width: 7,
		height: 13,
		marginRight: 10,
	},
	image2: {
		width: 30,
		height: 8,
	},
	image3: {
		width: 23,
		height: 23,
		marginRight: 8,
	},
	image4: {
		width: 30,
		height: 30,
		marginRight: 8,
	},
	image5: {
		width: 24,
		height: 24,
		marginRight: 7,
	},
	image6: {
		width: 22,
		height: 22,
		marginRight: 47,
	},
	image7: {
		width: 27,
		height: 22,
	},
	image8: {
		width: 19,
		height: 22,
		marginRight: 52,
	},
	image9: {
		width: 22,
		height: 14,
	},
	image10: {
		width: 47,
		height: 48,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 20,
		marginHorizontal: 15,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
	},
	row3: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 3,
		marginHorizontal: 5,
	},
	row4: {
		alignSelf: "flex-start",
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 6,
		marginLeft: 6,
	},
	row5: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 6,
		marginLeft: 6,
	},
	row6: {
		alignSelf: "flex-start",
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 6,
	},
	row7: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 20,
		marginHorizontal: 5,
	},
	row8: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 4,
		marginLeft: 8,
	},
	row9: {
		alignSelf: "flex-start",
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 4,
		marginLeft: 8,
	},
	row10: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 6,
		marginHorizontal: 46,
	},
	row11: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 13,
		marginLeft: 34,
		marginRight: 48,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	scrollView2: {
		flexDirection: "row",
		marginBottom: 32,
	},
	text: {
		color: "#000000",
		fontSize: 17,
		fontWeight: "bold",
	},
	text2: {
		color: "#242424",
		fontSize: 14,
	},
	text3: {
		color: "#FFFFFF",
		fontSize: 10,
	},
	text4: {
		color: "#242424",
		fontSize: 12,
		marginBottom: 6,
		marginLeft: 6,
		width: 153,
	},
	text5: {
		color: "#242424",
		fontSize: 12,
	},
	text6: {
		color: "#242424",
		fontSize: 8,
		marginRight: 33,
	},
	text7: {
		color: "#242424",
		fontSize: 12,
		marginBottom: 6,
		marginLeft: 6,
		width: 140,
	},
	text8: {
		color: "#242424",
		fontSize: 8,
		marginRight: 21,
	},
	text9: {
		color: "#242424",
		fontSize: 12,
		marginBottom: 6,
		marginLeft: 6,
		width: 163,
	},
	text10: {
		color: "#242424",
		fontSize: 8,
	},
	text11: {
		color: "#242424",
		fontSize: 12,
		marginBottom: 6,
		width: 159,
	},
	text12: {
		color: "#242424",
		fontSize: 8,
		marginRight: 65,
	},
	text13: {
		color: "#242424",
		fontSize: 12,
		marginBottom: 6,
		marginLeft: 8,
		width: 158,
	},
	text14: {
		color: "#242424",
		fontSize: 12,
		marginBottom: 6,
		marginLeft: 8,
		width: 153,
	},
	text15: {
		color: "#242424",
		fontSize: 12,
		marginBottom: 6,
		marginLeft: 6,
		width: 165,
	},
	text16: {
		color: "#242424",
		fontSize: 8,
		marginRight: 12,
	},
	text17: {
		color: "#242424",
		fontSize: 12,
		marginBottom: 6,
		marginLeft: 6,
		width: 159,
	},
	text18: {
		color: "#242424",
		fontSize: 8,
		marginRight: 35,
	},
	text19: {
		color: "#242424",
		fontSize: 12,
		marginBottom: 6,
		marginLeft: 6,
		width: 132,
	},
	text20: {
		color: "#242424",
		fontSize: 12,
		marginRight: 32,
	},
	text21: {
		color: "#242424",
		fontSize: 12,
		marginBottom: 6,
		marginLeft: 6,
		width: 157,
	},
	text22: {
		color: "#242424",
		fontSize: 8,
		marginRight: 24,
	},
	text23: {
		color: "#242424",
		fontSize: 12,
		marginBottom: 6,
		marginLeft: 8,
	},
	text24: {
		color: "#242424",
		fontSize: 8,
		marginRight: 60,
	},
	text25: {
		color: "#242424",
		fontSize: 12,
		marginBottom: 6,
		marginLeft: 8,
		width: 150,
	},
	text26: {
		color: "#C7D4FF",
		fontSize: 12,
		marginRight: 34,
	},
	text27: {
		color: "#FFFFFF",
		fontSize: 12,
	},
	text28: {
		color: "#C7D4FF",
		fontSize: 12,
		marginRight: 29,
	},
	text29: {
		color: "#C7D4FF",
		fontSize: 12,
	},
	view: {
		paddingVertical: 16,
		paddingHorizontal: 46,
		marginRight: -125,
	},
	view2: {
		paddingVertical: 16,
		paddingHorizontal: 46,
	},
	view3: {
		paddingTop: 10,
		paddingLeft: 8,
	},
	view4: {
		alignSelf: "flex-start",
		backgroundColor: "#24242480",
		borderRadius: 60,
		paddingVertical: 2,
		paddingHorizontal: 9,
		marginBottom: 161,
	},
	view5: {
		paddingTop: 10,
		paddingLeft: 9,
	},
	view6: {
		paddingTop: 13,
		paddingLeft: 15,
	},
	view7: {
		alignSelf: "flex-start",
		backgroundColor: "#24242480",
		borderRadius: 60,
		paddingTop: 2,
		paddingBottom: 3,
		paddingHorizontal: 10,
		marginBottom: 272,
	},
	view8: {
		alignSelf: "flex-start",
		backgroundColor: "#24242480",
		borderRadius: 60,
		paddingVertical: 2,
		paddingHorizontal: 10,
		marginBottom: 161,
	},
	view9: {
		paddingTop: 15,
		paddingLeft: 15,
	},
	view10: {
		alignSelf: "flex-start",
		backgroundColor: "#242424B0",
		borderRadius: 60,
		paddingVertical: 4,
		paddingHorizontal: 10,
		marginBottom: 270,
	},
	view11: {
		alignSelf: "flex-start",
		backgroundColor: "#242424B0",
		borderRadius: 60,
		paddingVertical: 3,
		paddingHorizontal: 10,
		marginBottom: 270,
	},
	view12: {
		alignItems: "center",
	},
});
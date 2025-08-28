import {View, Text, StyleSheet} from 'react-native';
import {useAppSelector} from '../store/hooks';
import {selectTodoStats} from '../store/selectors/todoSelectors';

const TodoStats: React.FC = () => {
    const stats = useAppSelector(selectTodoStats);

    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>
                {stats.completed} of {stats.total} completed
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{

    },
    subtitle:{
    }

});

export default TodoStats;